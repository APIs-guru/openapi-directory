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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProfileObjectsRequestBodyObjectFilter struct {
	KeyName *string  `json:"KeyName"`
	Values  []string `json:"Values"`
}

type ListProfileObjectsRequestBody struct {
	ObjectFilter   *ListProfileObjectsRequestBodyObjectFilter `json:"ObjectFilter"`
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
