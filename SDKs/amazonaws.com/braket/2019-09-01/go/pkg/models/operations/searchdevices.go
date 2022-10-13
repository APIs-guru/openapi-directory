package operations

import (
	"openapi/pkg/models/shared"
)

type SearchDevicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchDevicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchDevicesRequestBody struct {
	Filters    []shared.SearchDevicesFilter `json:"filters"`
	MaxResults *int64                       `json:"maxResults"`
	NextToken  *string                      `json:"nextToken"`
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
