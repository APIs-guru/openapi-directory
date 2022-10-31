package operations

import (
	"openapi/pkg/models/shared"
)

type BatchStopJobRunXAmzTargetEnum string

const (
	BatchStopJobRunXAmzTargetEnumAwsGlueBatchStopJobRun BatchStopJobRunXAmzTargetEnum = "AWSGlue.BatchStopJobRun"
)

type BatchStopJobRunHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchStopJobRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchStopJobRunRequest struct {
	Headers BatchStopJobRunHeaders
	Request shared.BatchStopJobRunRequest `request:"mediaType=application/json"`
}

type BatchStopJobRunResponse struct {
	BatchStopJobRunResponse   *shared.BatchStopJobRunResponse
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
