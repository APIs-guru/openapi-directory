package operations

import (
	"openapi/pkg/models/shared"
)

type StopWorkflowRunXAmzTargetEnum string

const (
	StopWorkflowRunXAmzTargetEnumAwsGlueStopWorkflowRun StopWorkflowRunXAmzTargetEnum = "AWSGlue.StopWorkflowRun"
)

type StopWorkflowRunHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopWorkflowRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopWorkflowRunRequest struct {
	Headers StopWorkflowRunHeaders
	Request shared.StopWorkflowRunRequest `request:"mediaType=application/json"`
}

type StopWorkflowRunResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	IllegalWorkflowStateException *interface{}
	InternalServiceException      *interface{}
	InvalidInputException         *interface{}
	OperationTimeoutException     *interface{}
	StatusCode                    int64
	StopWorkflowRunResponse       map[string]interface{}
}
