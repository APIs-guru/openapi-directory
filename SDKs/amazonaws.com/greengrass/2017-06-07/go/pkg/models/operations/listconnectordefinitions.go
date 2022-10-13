package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectorDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListConnectorDefinitionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListConnectorDefinitionsRequest struct {
	QueryParams ListConnectorDefinitionsQueryParams
	Headers     ListConnectorDefinitionsHeaders
}

type ListConnectorDefinitionsResponse struct {
	ContentType                      string
	ListConnectorDefinitionsResponse *shared.ListConnectorDefinitionsResponse
	StatusCode                       int64
}
