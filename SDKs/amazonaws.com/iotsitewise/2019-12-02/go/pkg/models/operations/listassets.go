package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssetsFilterEnum string

const (
	ListAssetsFilterEnumAll      ListAssetsFilterEnum = "ALL"
	ListAssetsFilterEnumTopLevel ListAssetsFilterEnum = "TOP_LEVEL"
)

type ListAssetsQueryParams struct {
	AssetModelID *string               `queryParam:"style=form,explode=true,name=assetModelId"`
	Filter       *ListAssetsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	MaxResults   *int64                `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken    *string               `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAssetsRequest struct {
	QueryParams ListAssetsQueryParams
	Headers     ListAssetsHeaders
}

type ListAssetsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListAssetsResponse        *shared.ListAssetsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
