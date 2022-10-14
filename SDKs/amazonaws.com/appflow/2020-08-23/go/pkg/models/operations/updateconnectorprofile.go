package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectorProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateConnectorProfileRequestBodyConnectionModeEnum string

const (
	UpdateConnectorProfileRequestBodyConnectionModeEnumPublic  UpdateConnectorProfileRequestBodyConnectionModeEnum = "Public"
	UpdateConnectorProfileRequestBodyConnectionModeEnumPrivate UpdateConnectorProfileRequestBodyConnectionModeEnum = "Private"
)

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
