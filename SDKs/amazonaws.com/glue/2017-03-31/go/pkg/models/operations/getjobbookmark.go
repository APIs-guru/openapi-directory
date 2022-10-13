package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobBookmarkXAmzTargetEnum string

const (
	GetJobBookmarkXAmzTargetEnumAwsGlueGetJobBookmark GetJobBookmarkXAmzTargetEnum = "AWSGlue.GetJobBookmark"
)

type GetJobBookmarkHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobBookmarkXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobBookmarkRequest struct {
	Headers GetJobBookmarkHeaders
	Request shared.GetJobBookmarkRequest `request:"mediaType=application/json"`
}

type GetJobBookmarkResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetJobBookmarkResponse    *shared.GetJobBookmarkResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
