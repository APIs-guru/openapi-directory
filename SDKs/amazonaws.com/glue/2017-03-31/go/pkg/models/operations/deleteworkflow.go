package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkflowXAmzTargetEnum string

const (
	DeleteWorkflowXAmzTargetEnumAwsGlueDeleteWorkflow DeleteWorkflowXAmzTargetEnum = "AWSGlue.DeleteWorkflow"
)

type DeleteWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkflowRequest struct {
	Headers DeleteWorkflowHeaders
	Request shared.DeleteWorkflowRequest `request:"mediaType=application/json"`
}

type DeleteWorkflowResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteWorkflowResponse          *shared.DeleteWorkflowResponse
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
