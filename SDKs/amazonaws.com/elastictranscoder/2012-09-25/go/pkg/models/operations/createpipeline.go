package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePipelineRequestBodyContentConfig struct {
	Bucket       *string             `json:"Bucket,omitempty"`
	Permissions  []shared.Permission `json:"Permissions,omitempty"`
	StorageClass *string             `json:"StorageClass,omitempty"`
}

type CreatePipelineRequestBodyNotifications struct {
	Completed   *string `json:"Completed,omitempty"`
	Error       *string `json:"Error,omitempty"`
	Progressing *string `json:"Progressing,omitempty"`
	Warning     *string `json:"Warning,omitempty"`
}

type CreatePipelineRequestBodyThumbnailConfig struct {
	Bucket       *string             `json:"Bucket,omitempty"`
	Permissions  []shared.Permission `json:"Permissions,omitempty"`
	StorageClass *string             `json:"StorageClass,omitempty"`
}

type CreatePipelineRequestBody struct {
	AwsKmsKeyArn    *string                                   `json:"AwsKmsKeyArn,omitempty"`
	ContentConfig   *CreatePipelineRequestBodyContentConfig   `json:"ContentConfig,omitempty"`
	InputBucket     string                                    `json:"InputBucket"`
	Name            string                                    `json:"Name"`
	Notifications   *CreatePipelineRequestBodyNotifications   `json:"Notifications,omitempty"`
	OutputBucket    *string                                   `json:"OutputBucket,omitempty"`
	Role            string                                    `json:"Role"`
	ThumbnailConfig *CreatePipelineRequestBodyThumbnailConfig `json:"ThumbnailConfig,omitempty"`
}

type CreatePipelineRequest struct {
	Headers CreatePipelineHeaders
	Request CreatePipelineRequestBody `request:"mediaType=application/json"`
}

type CreatePipelineResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreatePipelineResponse       *shared.CreatePipelineResponse
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
