package operations

import (
	"openapi/pkg/models/shared"
)

type StopNotebookExecutionXAmzTargetEnum string

const (
	StopNotebookExecutionXAmzTargetEnumElasticMapReduceStopNotebookExecution StopNotebookExecutionXAmzTargetEnum = "ElasticMapReduce.StopNotebookExecution"
)

type StopNotebookExecutionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopNotebookExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopNotebookExecutionRequest struct {
	Headers StopNotebookExecutionHeaders
	Request shared.StopNotebookExecutionInput `request:"mediaType=application/json"`
}

type StopNotebookExecutionResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
