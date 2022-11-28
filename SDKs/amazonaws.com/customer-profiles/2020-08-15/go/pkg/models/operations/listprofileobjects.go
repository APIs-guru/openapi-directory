package operations

import (
	"openapi/pkg/models/shared"
)

type ListProfileObjectsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type ListProfileObjectsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=max-results"`
	NextToken  *string `queryParam:"style=form,explode=true,name=next-token"`
}

type ListProfileObjectsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListProfileObjectsRequestBodyObjectFilter
// The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
type ListProfileObjectsRequestBodyObjectFilter struct {
	KeyName *string  `json:"KeyName,omitempty"`
	Values  []string `json:"Values,omitempty"`
}

type ListProfileObjectsRequestBody struct {
	ObjectFilter   *ListProfileObjectsRequestBodyObjectFilter `json:"ObjectFilter,omitempty"`
	ObjectTypeName string                                     `json:"ObjectTypeName"`
	ProfileID      string                                     `json:"ProfileId"`
}

type ListProfileObjectsRequest struct {
	PathParams  ListProfileObjectsPathParams
	QueryParams ListProfileObjectsQueryParams
	Headers     ListProfileObjectsHeaders
	Request     ListProfileObjectsRequestBody `request:"mediaType=application/json"`
}

type ListProfileObjectsResponse struct {
	AccessDeniedException      *interface{}
	BadRequestException        *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListProfileObjectsResponse *shared.ListProfileObjectsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
}
