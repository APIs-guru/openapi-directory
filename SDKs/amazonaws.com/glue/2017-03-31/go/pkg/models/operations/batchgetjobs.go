package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetJobsXAmzTargetEnum string

const (
	BatchGetJobsXAmzTargetEnumAwsGlueBatchGetJobs BatchGetJobsXAmzTargetEnum = "AWSGlue.BatchGetJobs"
)

type BatchGetJobsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetJobsRequest struct {
	Headers BatchGetJobsHeaders
	Request shared.BatchGetJobsRequest `request:"mediaType=application/json"`
}

type BatchGetJobsResponse struct {
	BatchGetJobsResponse      *shared.BatchGetJobsResponse
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
