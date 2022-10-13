package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowXAmzTargetEnum string

const (
	GetWorkflowXAmzTargetEnumAwsGlueGetWorkflow GetWorkflowXAmzTargetEnum = "AWSGlue.GetWorkflow"
)

type GetWorkflowHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetWorkflowRequest struct {
	Headers GetWorkflowHeaders
	Request shared.GetWorkflowRequest `request:"mediaType=application/json"`
}

type GetWorkflowResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetWorkflowResponse       *shared.GetWorkflowResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
