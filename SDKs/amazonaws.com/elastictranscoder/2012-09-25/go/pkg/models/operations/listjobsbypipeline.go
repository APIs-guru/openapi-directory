package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsByPipelinePathParams struct {
	PipelineID string `pathParam:"style=simple,explode=false,name=PipelineId"`
}

type ListJobsByPipelineQueryParams struct {
	Ascending *string `queryParam:"style=form,explode=true,name=Ascending"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListJobsByPipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListJobsByPipelineRequest struct {
	PathParams  ListJobsByPipelinePathParams
	QueryParams ListJobsByPipelineQueryParams
	Headers     ListJobsByPipelineHeaders
}

type ListJobsByPipelineResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ListJobsByPipelineResponse   *shared.ListJobsByPipelineResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
