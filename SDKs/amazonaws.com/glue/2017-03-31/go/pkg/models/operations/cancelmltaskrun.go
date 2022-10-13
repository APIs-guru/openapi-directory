package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMlTaskRunXAmzTargetEnum string

const (
	CancelMlTaskRunXAmzTargetEnumAwsGlueCancelMlTaskRun CancelMlTaskRunXAmzTargetEnum = "AWSGlue.CancelMLTaskRun"
)

type CancelMlTaskRunHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMlTaskRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelMlTaskRunRequest struct {
	Headers CancelMlTaskRunHeaders
	Request shared.CancelMlTaskRunRequest `request:"mediaType=application/json"`
}

type CancelMlTaskRunResponse struct {
	CancelMlTaskRunResponse   *shared.CancelMlTaskRunResponse
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
