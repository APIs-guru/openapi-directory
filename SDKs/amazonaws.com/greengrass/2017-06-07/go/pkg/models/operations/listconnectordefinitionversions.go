package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectorDefinitionVersionsPathParams struct {
	ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
}

type ListConnectorDefinitionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListConnectorDefinitionVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListConnectorDefinitionVersionsRequest struct {
	PathParams  ListConnectorDefinitionVersionsPathParams
	QueryParams ListConnectorDefinitionVersionsQueryParams
	Headers     ListConnectorDefinitionVersionsHeaders
}

type ListConnectorDefinitionVersionsResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	ListConnectorDefinitionVersionsResponse *shared.ListConnectorDefinitionVersionsResponse
	StatusCode                              int64
}
