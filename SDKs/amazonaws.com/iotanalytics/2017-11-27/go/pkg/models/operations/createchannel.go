package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateChannelRequestBodyChannelStorage struct {
	CustomerManagedS3 *shared.CustomerManagedChannelS3Storage `json:"customerManagedS3"`
	ServiceManagedS3  map[string]interface{}                  `json:"serviceManagedS3"`
}

type CreateChannelRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays"`
	Unlimited    *bool  `json:"unlimited"`
}

type CreateChannelRequestBody struct {
	ChannelName     string                                   `json:"channelName"`
	ChannelStorage  *CreateChannelRequestBodyChannelStorage  `json:"channelStorage"`
	RetentionPeriod *CreateChannelRequestBodyRetentionPeriod `json:"retentionPeriod"`
	Tags            []shared.Tag                             `json:"tags"`
}

type CreateChannelRequest struct {
	Headers CreateChannelHeaders
	Request CreateChannelRequestBody `request:"mediaType=application/json"`
}

type CreateChannelResponse struct {
	ContentType                    string
	CreateChannelResponse          *shared.CreateChannelResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
