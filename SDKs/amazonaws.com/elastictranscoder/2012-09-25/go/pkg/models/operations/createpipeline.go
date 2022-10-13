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
	Bucket       *string             `json:"Bucket"`
	Permissions  []shared.Permission `json:"Permissions"`
	StorageClass *string             `json:"StorageClass"`
}

type CreatePipelineRequestBodyNotifications struct {
	Completed   *string `json:"Completed"`
	Error       *string `json:"Error"`
	Progressing *string `json:"Progressing"`
	Warning     *string `json:"Warning"`
}

type CreatePipelineRequestBodyThumbnailConfig struct {
	Bucket       *string             `json:"Bucket"`
	Permissions  []shared.Permission `json:"Permissions"`
	StorageClass *string             `json:"StorageClass"`
}

type CreatePipelineRequestBody struct {
	AwsKmsKeyArn    *string                                   `json:"AwsKmsKeyArn"`
	ContentConfig   *CreatePipelineRequestBodyContentConfig   `json:"ContentConfig"`
	InputBucket     string                                    `json:"InputBucket"`
	Name            string                                    `json:"Name"`
	Notifications   *CreatePipelineRequestBodyNotifications   `json:"Notifications"`
	OutputBucket    *string                                   `json:"OutputBucket"`
	Role            string                                    `json:"Role"`
	ThumbnailConfig *CreatePipelineRequestBodyThumbnailConfig `json:"ThumbnailConfig"`
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
