package operations

import (
	"openapi/pkg/models/shared"
)

type SearchDevicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchDevicesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SearchDevicesRequestBody struct {
	Filters    []shared.SearchDevicesFilter `json:"filters"`
	MaxResults *int64                       `json:"maxResults,omitempty"`
	NextToken  *string                      `json:"nextToken,omitempty"`
}

type SearchDevicesRequest struct {
	QueryParams SearchDevicesQueryParams
	Headers     SearchDevicesHeaders
	Request     SearchDevicesRequestBody `request:"mediaType=application/json"`
}

type SearchDevicesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServiceException *interface{}
	SearchDevicesResponse    *shared.SearchDevicesResponse
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
