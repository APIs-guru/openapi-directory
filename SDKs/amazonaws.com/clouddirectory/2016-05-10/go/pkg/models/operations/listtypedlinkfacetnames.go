package operations

import (
	"openapi/pkg/models/shared"
)

type ListTypedLinkFacetNamesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTypedLinkFacetNamesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type ListTypedLinkFacetNamesRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListTypedLinkFacetNamesRequest struct {
	QueryParams ListTypedLinkFacetNamesQueryParams
	Headers     ListTypedLinkFacetNamesHeaders
	Request     ListTypedLinkFacetNamesRequestBody `request:"mediaType=application/json"`
}

type ListTypedLinkFacetNamesResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	ContentType                     string
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	InvalidNextTokenException       *shared.InvalidNextTokenException
	LimitExceededException          *shared.LimitExceededException
	ListTypedLinkFacetNamesResponse *shared.ListTypedLinkFacetNamesResponse
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
