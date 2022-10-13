package operations

import (
	"openapi/pkg/models/shared"
)

type StartNotebookExecutionXAmzTargetEnum string

const (
	StartNotebookExecutionXAmzTargetEnumElasticMapReduceStartNotebookExecution StartNotebookExecutionXAmzTargetEnum = "ElasticMapReduce.StartNotebookExecution"
)

type StartNotebookExecutionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartNotebookExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartNotebookExecutionRequest struct {
	Headers StartNotebookExecutionHeaders
	Request shared.StartNotebookExecutionInput `request:"mediaType=application/json"`
}

type StartNotebookExecutionResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	InvalidRequestException      *interface{}
	StartNotebookExecutionOutput *shared.StartNotebookExecutionOutput
	StatusCode                   int64
}
