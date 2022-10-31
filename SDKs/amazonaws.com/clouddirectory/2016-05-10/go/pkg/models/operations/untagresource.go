package operations

import (
	"openapi/pkg/models/shared"
)

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UntagResourceRequestBody struct {
	ResourceArn string   `json:"ResourceArn"`
	TagKeys     []string `json:"TagKeys"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request UntagResourceRequestBody `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	InvalidTaggingRequestException *shared.InvalidTaggingRequestException
	LimitExceededException         *shared.LimitExceededException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	UntagResourceResponse          map[string]interface{}
	ValidationException            *shared.ValidationException
}
