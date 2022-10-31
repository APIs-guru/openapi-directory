package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsByStatusPathParams struct {
	Status string `pathParam:"style=simple,explode=false,name=Status"`
}

type ListJobsByStatusQueryParams struct {
	Ascending *string `queryParam:"style=form,explode=true,name=Ascending"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListJobsByStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListJobsByStatusRequest struct {
	PathParams  ListJobsByStatusPathParams
	QueryParams ListJobsByStatusQueryParams
	Headers     ListJobsByStatusHeaders
}

type ListJobsByStatusResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ListJobsByStatusResponse     *shared.ListJobsByStatusResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
