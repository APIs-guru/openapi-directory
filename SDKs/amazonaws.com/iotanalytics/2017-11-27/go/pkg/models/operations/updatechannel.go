package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateChannelPathParams struct {
	ChannelName string `pathParam:"style=simple,explode=false,name=channelName"`
}

type UpdateChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateChannelRequestBodyChannelStorage struct {
	CustomerManagedS3 *shared.CustomerManagedChannelS3Storage `json:"customerManagedS3,omitempty"`
	ServiceManagedS3  map[string]interface{}                  `json:"serviceManagedS3,omitempty"`
}

type UpdateChannelRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type UpdateChannelRequestBody struct {
	ChannelStorage  *UpdateChannelRequestBodyChannelStorage  `json:"channelStorage,omitempty"`
	RetentionPeriod *UpdateChannelRequestBodyRetentionPeriod `json:"retentionPeriod,omitempty"`
}

type UpdateChannelRequest struct {
	PathParams UpdateChannelPathParams
	Headers    UpdateChannelHeaders
	Request    UpdateChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateChannelResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
