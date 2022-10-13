package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeploymentsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type ListDeploymentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDeploymentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDeploymentsRequest struct {
	PathParams  ListDeploymentsPathParams
	QueryParams ListDeploymentsQueryParams
	Headers     ListDeploymentsHeaders
}

type ListDeploymentsResponse struct {
	BadRequestException     *interface{}
	ContentType             string
	ListDeploymentsResponse *shared.ListDeploymentsResponse
	StatusCode              int64
}
