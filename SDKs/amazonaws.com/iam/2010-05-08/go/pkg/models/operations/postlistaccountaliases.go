package operations

type PostListAccountAliasesActionEnum string

const (
	PostListAccountAliasesActionEnumListAccountAliases PostListAccountAliasesActionEnum = "ListAccountAliases"
)

type PostListAccountAliasesVersionEnum string

const (
	PostListAccountAliasesVersionEnumTwoThousandAndTen0508 PostListAccountAliasesVersionEnum = "2010-05-08"
)

type PostListAccountAliasesQueryParams struct {
	Action   PostListAccountAliasesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                           `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListAccountAliasesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAccountAliasesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListAccountAliasesRequest struct {
	QueryParams PostListAccountAliasesQueryParams
	Headers     PostListAccountAliasesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListAccountAliasesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
