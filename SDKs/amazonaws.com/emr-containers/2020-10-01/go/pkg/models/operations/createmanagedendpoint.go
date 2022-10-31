package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedEndpointPathParams struct {
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type CreateManagedEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateManagedEndpointRequestBodyConfigurationOverrides struct {
	ApplicationConfiguration []shared.Configuration          `json:"applicationConfiguration,omitempty"`
	MonitoringConfiguration  *shared.MonitoringConfiguration `json:"monitoringConfiguration,omitempty"`
}

type CreateManagedEndpointRequestBody struct {
	CertificateArn         string                                                  `json:"certificateArn"`
	ClientToken            string                                                  `json:"clientToken"`
	ConfigurationOverrides *CreateManagedEndpointRequestBodyConfigurationOverrides `json:"configurationOverrides,omitempty"`
	ExecutionRoleArn       string                                                  `json:"executionRoleArn"`
	Name                   string                                                  `json:"name"`
	ReleaseLabel           string                                                  `json:"releaseLabel"`
	Tags                   map[string]string                                       `json:"tags,omitempty"`
	Type                   string                                                  `json:"type"`
}

type CreateManagedEndpointRequest struct {
	PathParams CreateManagedEndpointPathParams
	Headers    CreateManagedEndpointHeaders
	Request    CreateManagedEndpointRequestBody `request:"mediaType=application/json"`
}

type CreateManagedEndpointResponse struct {
	ContentType                   string
	CreateManagedEndpointResponse *shared.CreateManagedEndpointResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
