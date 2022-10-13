package operations

import (
	"openapi/pkg/models/shared"
)

type ListProfileObjectTypesPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type ListProfileObjectTypesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=max-results"`
	NextToken  *string `queryParam:"style=form,explode=true,name=next-token"`
}

type ListProfileObjectTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProfileObjectTypesRequest struct {
	PathParams  ListProfileObjectTypesPathParams
	QueryParams ListProfileObjectTypesQueryParams
	Headers     ListProfileObjectTypesHeaders
}

type ListProfileObjectTypesResponse struct {
	AccessDeniedException          *interface{}
	BadRequestException            *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ListProfileObjectTypesResponse *shared.ListProfileObjectTypesResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
