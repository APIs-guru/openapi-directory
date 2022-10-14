package operations

import (
	"openapi/pkg/models/shared"
)

type ListFacetNamesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFacetNamesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListFacetNamesRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListFacetNamesRequest struct {
	QueryParams ListFacetNamesQueryParams
	Headers     ListFacetNamesHeaders
	Request     ListFacetNamesRequestBody `request:"mediaType=application/json"`
}

type ListFacetNamesResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	InvalidArnException        *interface{}
	InvalidNextTokenException  *interface{}
	LimitExceededException     *interface{}
	ListFacetNamesResponse     *shared.ListFacetNamesResponse
	ResourceNotFoundException  *interface{}
	RetryableConflictException *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
