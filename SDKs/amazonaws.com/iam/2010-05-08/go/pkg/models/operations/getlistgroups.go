package operations

type GetListGroupsActionEnum string

const (
	GetListGroupsActionEnumListGroups GetListGroupsActionEnum = "ListGroups"
)

type GetListGroupsVersionEnum string

const (
	GetListGroupsVersionEnumTwoThousandAndTen0508 GetListGroupsVersionEnum = "2010-05-08"
)

type GetListGroupsQueryParams struct {
	Action     GetListGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                   `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                  `queryParam:"style=form,explode=true,name=PathPrefix"`
	Version    GetListGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListGroupsRequest struct {
	QueryParams GetListGroupsQueryParams
	Headers     GetListGroupsHeaders
}

type GetListGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
