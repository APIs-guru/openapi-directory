package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationConfigurationPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type GetNotificationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetNotificationConfigurationRequest struct {
	PathParams GetNotificationConfigurationPathParams
	Headers    GetNotificationConfigurationHeaders
}

type GetNotificationConfigurationResponse struct {
	ContentType                          string
	GetNotificationConfigurationResponse *shared.GetNotificationConfigurationResponse
	InternalServerException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	ValidationException                  *interface{}
}
