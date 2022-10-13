package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowRunPropertiesXAmzTargetEnum string

const (
	GetWorkflowRunPropertiesXAmzTargetEnumAwsGlueGetWorkflowRunProperties GetWorkflowRunPropertiesXAmzTargetEnum = "AWSGlue.GetWorkflowRunProperties"
)

type GetWorkflowRunPropertiesHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWorkflowRunPropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetWorkflowRunPropertiesRequest struct {
	Headers GetWorkflowRunPropertiesHeaders
	Request shared.GetWorkflowRunPropertiesRequest `request:"mediaType=application/json"`
}

type GetWorkflowRunPropertiesResponse struct {
	ContentType                      string
	EntityNotFoundException          *interface{}
	GetWorkflowRunPropertiesResponse *shared.GetWorkflowRunPropertiesResponse
	InternalServiceException         *interface{}
	InvalidInputException            *interface{}
	OperationTimeoutException        *interface{}
	StatusCode                       int64
}
