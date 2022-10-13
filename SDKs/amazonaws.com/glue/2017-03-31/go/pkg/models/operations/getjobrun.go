package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobRunXAmzTargetEnum string

const (
	GetJobRunXAmzTargetEnumAwsGlueGetJobRun GetJobRunXAmzTargetEnum = "AWSGlue.GetJobRun"
)

type GetJobRunHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobRunRequest struct {
	Headers GetJobRunHeaders
	Request shared.GetJobRunRequest `request:"mediaType=application/json"`
}

type GetJobRunResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetJobRunResponse         *shared.GetJobRunResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
