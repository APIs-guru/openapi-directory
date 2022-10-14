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
	Bucket       *string             `json:"Bucket,omitempty"`
	Permissions  []shared.Permission `json:"Permissions,omitempty"`
	StorageClass *string             `json:"StorageClass,omitempty"`
}

type UpdatePipelineRequestBodyNotifications struct {
	Completed   *string `json:"Completed,omitempty"`
	Error       *string `json:"Error,omitempty"`
	Progressing *string `json:"Progressing,omitempty"`
	Warning     *string `json:"Warning,omitempty"`
}

type UpdatePipelineRequestBodyThumbnailConfig struct {
	Bucket       *string             `json:"Bucket,omitempty"`
	Permissions  []shared.Permission `json:"Permissions,omitempty"`
	StorageClass *string             `json:"StorageClass,omitempty"`
}

type UpdatePipelineRequestBody struct {
	AwsKmsKeyArn    *string                                   `json:"AwsKmsKeyArn,omitempty"`
	ContentConfig   *UpdatePipelineRequestBodyContentConfig   `json:"ContentConfig,omitempty"`
	InputBucket     *string                                   `json:"InputBucket,omitempty"`
	Name            *string                                   `json:"Name,omitempty"`
	Notifications   *UpdatePipelineRequestBodyNotifications   `json:"Notifications,omitempty"`
	Role            *string                                   `json:"Role,omitempty"`
	ThumbnailConfig *UpdatePipelineRequestBodyThumbnailConfig `json:"ThumbnailConfig,omitempty"`
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
