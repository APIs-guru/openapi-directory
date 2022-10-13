package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetWorkflowsXAmzTargetEnum string

const (
	BatchGetWorkflowsXAmzTargetEnumAwsGlueBatchGetWorkflows BatchGetWorkflowsXAmzTargetEnum = "AWSGlue.BatchGetWorkflows"
)

type BatchGetWorkflowsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetWorkflowsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetWorkflowsRequest struct {
	Headers BatchGetWorkflowsHeaders
	Request shared.BatchGetWorkflowsRequest `request:"mediaType=application/json"`
}

type BatchGetWorkflowsResponse struct {
	BatchGetWorkflowsResponse *shared.BatchGetWorkflowsResponse
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
