package operations

import (
	"openapi/pkg/models/shared"
)

type ListTypedLinkFacetAttributesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTypedLinkFacetAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListTypedLinkFacetAttributesRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	Name       string  `json:"Name"`
	NextToken  *string `json:"NextToken"`
}

type ListTypedLinkFacetAttributesRequest struct {
	QueryParams ListTypedLinkFacetAttributesQueryParams
	Headers     ListTypedLinkFacetAttributesHeaders
	Request     ListTypedLinkFacetAttributesRequestBody `request:"mediaType=application/json"`
}

type ListTypedLinkFacetAttributesResponse struct {
	AccessDeniedException                *shared.AccessDeniedException
	ContentType                          string
	FacetNotFoundException               *shared.FacetNotFoundException
	InternalServiceException             *shared.InternalServiceException
	InvalidArnException                  *shared.InvalidArnException
	InvalidNextTokenException            *shared.InvalidNextTokenException
	LimitExceededException               *shared.LimitExceededException
	ListTypedLinkFacetAttributesResponse *shared.ListTypedLinkFacetAttributesResponse
	ResourceNotFoundException            *shared.ResourceNotFoundException
	RetryableConflictException           *shared.RetryableConflictException
	StatusCode                           int64
	ValidationException                  *shared.ValidationException
}
