package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetsPathParams struct {
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type ListDatasetsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDatasetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDatasetsRequest struct {
	PathParams  ListDatasetsPathParams
	QueryParams ListDatasetsQueryParams
	Headers     ListDatasetsHeaders
}

type ListDatasetsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListDatasetsResponse      *shared.ListDatasetsResponse
	NotAuthorizedException    *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
