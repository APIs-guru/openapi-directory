package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationConfigurationPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type GetNotificationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
