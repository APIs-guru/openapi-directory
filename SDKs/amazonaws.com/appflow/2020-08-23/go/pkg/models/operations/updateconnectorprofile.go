package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectorProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateConnectorProfileRequestBodyConnectionModeEnum string

const (
	UpdateConnectorProfileRequestBodyConnectionModeEnumPublic  UpdateConnectorProfileRequestBodyConnectionModeEnum = "Public"
	UpdateConnectorProfileRequestBodyConnectionModeEnumPrivate UpdateConnectorProfileRequestBodyConnectionModeEnum = "Private"
)

// UpdateConnectorProfileRequestBodyConnectorProfileConfig
//
//	Defines the connector-specific configuration and credentials for the connector profile.
type UpdateConnectorProfileRequestBodyConnectorProfileConfig struct {
	ConnectorProfileCredentials *shared.ConnectorProfileCredentials `json:"connectorProfileCredentials,omitempty"`
	ConnectorProfileProperties  *shared.ConnectorProfileProperties  `json:"connectorProfileProperties,omitempty"`
}

type UpdateConnectorProfileRequestBody struct {
	ConnectionMode         UpdateConnectorProfileRequestBodyConnectionModeEnum     `json:"connectionMode"`
	ConnectorProfileConfig UpdateConnectorProfileRequestBodyConnectorProfileConfig `json:"connectorProfileConfig"`
	ConnectorProfileName   string                                                  `json:"connectorProfileName"`
}

type UpdateConnectorProfileRequest struct {
	Headers UpdateConnectorProfileHeaders
	Request UpdateConnectorProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateConnectorProfileResponse struct {
	ConflictException                *interface{}
	ConnectorAuthenticationException *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	UpdateConnectorProfileResponse   *shared.UpdateConnectorProfileResponse
	ValidationException              *interface{}
}
