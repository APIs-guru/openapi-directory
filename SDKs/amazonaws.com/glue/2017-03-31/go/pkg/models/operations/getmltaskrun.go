package operations

import (
	"openapi/pkg/models/shared"
)

type GetMlTaskRunXAmzTargetEnum string

const (
	GetMlTaskRunXAmzTargetEnumAwsGlueGetMlTaskRun GetMlTaskRunXAmzTargetEnum = "AWSGlue.GetMLTaskRun"
)

type GetMlTaskRunHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMlTaskRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMlTaskRunRequest struct {
	Headers GetMlTaskRunHeaders
	Request shared.GetMlTaskRunRequest `request:"mediaType=application/json"`
}

type GetMlTaskRunResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetMlTaskRunResponse      *shared.GetMlTaskRunResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
