package operations

import (
	"openapi/pkg/models/shared"
)

type ListFacetAttributesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFacetAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListFacetAttributesRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	Name       string  `json:"Name"`
	NextToken  *string `json:"NextToken"`
}

type ListFacetAttributesRequest struct {
	QueryParams ListFacetAttributesQueryParams
	Headers     ListFacetAttributesHeaders
	Request     ListFacetAttributesRequestBody `request:"mediaType=application/json"`
}

type ListFacetAttributesResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	FacetNotFoundException      *interface{}
	InternalServiceException    *interface{}
	InvalidArnException         *interface{}
	InvalidNextTokenException   *interface{}
	LimitExceededException      *interface{}
	ListFacetAttributesResponse *shared.ListFacetAttributesResponse
	ResourceNotFoundException   *interface{}
	RetryableConflictException  *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
