package operations

type PostListPlatformVersionsActionEnum string

const (
	PostListPlatformVersionsActionEnumListPlatformVersions PostListPlatformVersionsActionEnum = "ListPlatformVersions"
)

type PostListPlatformVersionsVersionEnum string

const (
	PostListPlatformVersionsVersionEnumTwoThousandAndTen1201 PostListPlatformVersionsVersionEnum = "2010-12-01"
)

type PostListPlatformVersionsQueryParams struct {
	Action     PostListPlatformVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostListPlatformVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListPlatformVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListPlatformVersionsRequest struct {
	QueryParams PostListPlatformVersionsQueryParams
	Headers     PostListPlatformVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListPlatformVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
