package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkflowXAmzTargetEnum string

const (
	UpdateWorkflowXAmzTargetEnumAwsGlueUpdateWorkflow UpdateWorkflowXAmzTargetEnum = "AWSGlue.UpdateWorkflow"
)

type UpdateWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkflowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
