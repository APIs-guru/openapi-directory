package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowRunPropertiesXAmzTargetEnum string

const (
	GetWorkflowRunPropertiesXAmzTargetEnumAwsGlueGetWorkflowRunProperties GetWorkflowRunPropertiesXAmzTargetEnum = "AWSGlue.GetWorkflowRunProperties"
)

type GetWorkflowRunPropertiesHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWorkflowRunPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
