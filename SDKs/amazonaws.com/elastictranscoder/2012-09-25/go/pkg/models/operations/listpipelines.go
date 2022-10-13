package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelinesQueryParams struct {
	Ascending *string `queryParam:"style=form,explode=true,name=Ascending"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListPipelinesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPipelinesRequest struct {
	QueryParams ListPipelinesQueryParams
	Headers     ListPipelinesHeaders
}

type ListPipelinesResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ListPipelinesResponse        *shared.ListPipelinesResponse
	StatusCode                   int64
	ValidationException          *interface{}
}
