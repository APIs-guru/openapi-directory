package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelineExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPipelineExecutionsXAmzTargetEnum string

const (
	ListPipelineExecutionsXAmzTargetEnumCodePipeline20150709ListPipelineExecutions ListPipelineExecutionsXAmzTargetEnum = "CodePipeline_20150709.ListPipelineExecutions"
)

type ListPipelineExecutionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelineExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPipelineExecutionsRequest struct {
	QueryParams ListPipelineExecutionsQueryParams
	Headers     ListPipelineExecutionsHeaders
	Request     shared.ListPipelineExecutionsInput `request:"mediaType=application/json"`
}

type ListPipelineExecutionsResponse struct {
	ContentType                  string
	InvalidNextTokenException    *interface{}
	ListPipelineExecutionsOutput *shared.ListPipelineExecutionsOutput
	PipelineNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
