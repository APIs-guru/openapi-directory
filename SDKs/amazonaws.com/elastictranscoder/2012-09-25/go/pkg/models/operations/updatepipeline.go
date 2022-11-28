package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePipelinePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdatePipelineRequestBodyContentConfig
// The <code>PipelineOutputConfig</code> structure.
type UpdatePipelineRequestBodyContentConfig struct {
	Bucket       *string             `json:"Bucket,omitempty"`
	Permissions  []shared.Permission `json:"Permissions,omitempty"`
	StorageClass *string             `json:"StorageClass,omitempty"`
}

// UpdatePipelineRequestBodyNotifications
// <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
type UpdatePipelineRequestBodyNotifications struct {
	Completed   *string `json:"Completed,omitempty"`
	Error       *string `json:"Error,omitempty"`
	Progressing *string `json:"Progressing,omitempty"`
	Warning     *string `json:"Warning,omitempty"`
}

// UpdatePipelineRequestBodyThumbnailConfig
// The <code>PipelineOutputConfig</code> structure.
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
