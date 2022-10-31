package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMlTaskRunXAmzTargetEnum string

const (
	CancelMlTaskRunXAmzTargetEnumAwsGlueCancelMlTaskRun CancelMlTaskRunXAmzTargetEnum = "AWSGlue.CancelMLTaskRun"
)

type CancelMlTaskRunHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMlTaskRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
