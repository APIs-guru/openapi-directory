package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobXAmzTargetEnum string

const (
	GetJobXAmzTargetEnumAwsGlueGetJob GetJobXAmzTargetEnum = "AWSGlue.GetJob"
)

type GetJobHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobRequest struct {
	Headers GetJobHeaders
	Request shared.GetJobRequest `request:"mediaType=application/json"`
}

type GetJobResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetJobResponse            *shared.GetJobResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
