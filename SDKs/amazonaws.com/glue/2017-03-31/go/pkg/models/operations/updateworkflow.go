package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkflowXAmzTargetEnum string

const (
	UpdateWorkflowXAmzTargetEnumAwsGlueUpdateWorkflow UpdateWorkflowXAmzTargetEnum = "AWSGlue.UpdateWorkflow"
)

type UpdateWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateWorkflowRequest struct {
	Headers UpdateWorkflowHeaders
	Request shared.UpdateWorkflowRequest `request:"mediaType=application/json"`
}

type UpdateWorkflowResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
	UpdateWorkflowResponse          *shared.UpdateWorkflowResponse
}
