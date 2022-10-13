package operations

import (
	"openapi/pkg/models/shared"
)

type ListAddonsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ListAddonsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAddonsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAddonsRequest struct {
	PathParams  ListAddonsPathParams
	QueryParams ListAddonsQueryParams
	Headers     ListAddonsHeaders
}

type ListAddonsResponse struct {
	ClientException           *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ListAddonsResponse        *shared.ListAddonsResponse
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
