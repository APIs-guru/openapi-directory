package operations

type PostListGroupsActionEnum string

const (
	PostListGroupsActionEnumListGroups PostListGroupsActionEnum = "ListGroups"
)

type PostListGroupsVersionEnum string

const (
	PostListGroupsVersionEnumTwoThousandAndTen0508 PostListGroupsVersionEnum = "2010-05-08"
)

type PostListGroupsQueryParams struct {
	Action   PostListGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                   `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListGroupsRequest struct {
	QueryParams PostListGroupsQueryParams
	Headers     PostListGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
