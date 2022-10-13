package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedEndpointPathParams struct {
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type CreateManagedEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateManagedEndpointRequestBodyConfigurationOverrides struct {
	ApplicationConfiguration []shared.Configuration          `json:"applicationConfiguration"`
	MonitoringConfiguration  *shared.MonitoringConfiguration `json:"monitoringConfiguration"`
}

type CreateManagedEndpointRequestBody struct {
	CertificateArn         string                                                  `json:"certificateArn"`
	ClientToken            string                                                  `json:"clientToken"`
	ConfigurationOverrides *CreateManagedEndpointRequestBodyConfigurationOverrides `json:"configurationOverrides"`
	ExecutionRoleArn       string                                                  `json:"executionRoleArn"`
	Name                   string                                                  `json:"name"`
	ReleaseLabel           string                                                  `json:"releaseLabel"`
	Tags                   map[string]string                                       `json:"tags"`
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
