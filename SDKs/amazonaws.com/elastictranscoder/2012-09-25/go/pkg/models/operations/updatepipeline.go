package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePipelinePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePipelineRequestBodyContentConfig struct {
	Bucket       *string             `json:"Bucket"`
	Permissions  []shared.Permission `json:"Permissions"`
	StorageClass *string             `json:"StorageClass"`
}

type UpdatePipelineRequestBodyNotifications struct {
	Completed   *string `json:"Completed"`
	Error       *string `json:"Error"`
	Progressing *string `json:"Progressing"`
	Warning     *string `json:"Warning"`
}

type UpdatePipelineRequestBodyThumbnailConfig struct {
	Bucket       *string             `json:"Bucket"`
	Permissions  []shared.Permission `json:"Permissions"`
	StorageClass *string             `json:"StorageClass"`
}

type UpdatePipelineRequestBody struct {
	AwsKmsKeyArn    *string                                   `json:"AwsKmsKeyArn"`
	ContentConfig   *UpdatePipelineRequestBodyContentConfig   `json:"ContentConfig"`
	InputBucket     *string                                   `json:"InputBucket"`
	Name            *string                                   `json:"Name"`
	Notifications   *UpdatePipelineRequestBodyNotifications   `json:"Notifications"`
	Role            *string                                   `json:"Role"`
	ThumbnailConfig *UpdatePipelineRequestBodyThumbnailConfig `json:"ThumbnailConfig"`
}

type UpdatePipelineRequest struct {
	PathParams UpdatePipelinePathParams
	Headers    UpdatePipelineHeaders
	Request    UpdatePipelineRequestBody `request:"mediaType=application/json"`
}

type UpdatePipelineResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdatePipelineResponse       *shared.UpdatePipelineResponse
	ValidationException          *interface{}
}
