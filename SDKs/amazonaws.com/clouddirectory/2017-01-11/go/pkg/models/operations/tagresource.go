package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBody struct {
	ResourceArn string       `json:"ResourceArn"`
	Tags        []shared.Tag `json:"Tags"`
}

type TagResourceRequest struct {
	Headers TagResourceHeaders
	Request TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalServiceException       *interface{}
	InvalidArnException            *interface{}
	InvalidTaggingRequestException *interface{}
	LimitExceededException         *interface{}
	ResourceNotFoundException      *interface{}
	RetryableConflictException     *interface{}
	StatusCode                     int64
	TagResourceResponse            map[string]interface{}
	ValidationException            *interface{}
}
