package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkflowXAmzTargetEnum string

const (
	CreateWorkflowXAmzTargetEnumAwsGlueCreateWorkflow CreateWorkflowXAmzTargetEnum = "AWSGlue.CreateWorkflow"
)

type CreateWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkflowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateWorkflowRequest struct {
	Headers CreateWorkflowHeaders
	Request shared.CreateWorkflowRequest `request:"mediaType=application/json"`
}

type CreateWorkflowResponse struct {
	AlreadyExistsException               *interface{}
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateWorkflowResponse               *shared.CreateWorkflowResponse
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
