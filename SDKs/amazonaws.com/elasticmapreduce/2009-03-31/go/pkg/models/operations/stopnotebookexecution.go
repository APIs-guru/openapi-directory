package operations

import (
	"openapi/pkg/models/shared"
)

type StopNotebookExecutionXAmzTargetEnum string

const (
	StopNotebookExecutionXAmzTargetEnumElasticMapReduceStopNotebookExecution StopNotebookExecutionXAmzTargetEnum = "ElasticMapReduce.StopNotebookExecution"
)

type StopNotebookExecutionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopNotebookExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
