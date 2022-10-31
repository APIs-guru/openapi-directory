package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGatewayCapabilityConfigurationPathParams struct {
	GatewayID string `pathParam:"style=simple,explode=false,name=gatewayId"`
}

type UpdateGatewayCapabilityConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGatewayCapabilityConfigurationRequestBody struct {
	CapabilityConfiguration string `json:"capabilityConfiguration"`
	CapabilityNamespace     string `json:"capabilityNamespace"`
}

type UpdateGatewayCapabilityConfigurationRequest struct {
	PathParams UpdateGatewayCapabilityConfigurationPathParams
	Headers    UpdateGatewayCapabilityConfigurationHeaders
	Request    UpdateGatewayCapabilityConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateGatewayCapabilityConfigurationResponse struct {
	ConflictingOperationException                *interface{}
	ContentType                                  string
	InternalFailureException                     *interface{}
	InvalidRequestException                      *interface{}
	LimitExceededException                       *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
	UpdateGatewayCapabilityConfigurationResponse *shared.UpdateGatewayCapabilityConfigurationResponse
}
