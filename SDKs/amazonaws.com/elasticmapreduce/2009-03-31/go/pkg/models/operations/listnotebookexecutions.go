package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotebookExecutionsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListNotebookExecutionsXAmzTargetEnum string

const (
	ListNotebookExecutionsXAmzTargetEnumElasticMapReduceListNotebookExecutions ListNotebookExecutionsXAmzTargetEnum = "ElasticMapReduce.ListNotebookExecutions"
)

type ListNotebookExecutionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListNotebookExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListNotebookExecutionsRequest struct {
	QueryParams ListNotebookExecutionsQueryParams
	Headers     ListNotebookExecutionsHeaders
	Request     shared.ListNotebookExecutionsInput `request:"mediaType=application/json"`
}

type ListNotebookExecutionsResponse struct {
	ContentType                  string
	InternalServerError          *interface{}
	InvalidRequestException      *interface{}
	ListNotebookExecutionsOutput *shared.ListNotebookExecutionsOutput
	StatusCode                   int64
}
