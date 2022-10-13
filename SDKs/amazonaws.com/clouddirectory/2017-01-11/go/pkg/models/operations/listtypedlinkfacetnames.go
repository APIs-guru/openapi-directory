package operations

import (
	"openapi/pkg/models/shared"
)

type ListTypedLinkFacetNamesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTypedLinkFacetNamesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListTypedLinkFacetNamesRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type ListTypedLinkFacetNamesRequest struct {
	QueryParams ListTypedLinkFacetNamesQueryParams
	Headers     ListTypedLinkFacetNamesHeaders
	Request     ListTypedLinkFacetNamesRequestBody `request:"mediaType=application/json"`
}

type ListTypedLinkFacetNamesResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServiceException        *interface{}
	InvalidArnException             *interface{}
	InvalidNextTokenException       *interface{}
	LimitExceededException          *interface{}
	ListTypedLinkFacetNamesResponse *shared.ListTypedLinkFacetNamesResponse
	ResourceNotFoundException       *interface{}
	RetryableConflictException      *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
