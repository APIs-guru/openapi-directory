package operations

import (
	"openapi/pkg/models/shared"
)

type ListGatewaysQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListGatewaysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGatewaysRequest struct {
	QueryParams ListGatewaysQueryParams
	Headers     ListGatewaysHeaders
}

type ListGatewaysResponse struct {
	ContentType              string
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	ListGatewaysResponse     *shared.ListGatewaysResponse
	StatusCode               int64
	ThrottlingException      *interface{}
}
