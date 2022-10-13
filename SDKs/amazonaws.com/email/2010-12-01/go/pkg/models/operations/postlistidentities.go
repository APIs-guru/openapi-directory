package operations

type PostListIdentitiesActionEnum string

const (
	PostListIdentitiesActionEnumListIdentities PostListIdentitiesActionEnum = "ListIdentities"
)

type PostListIdentitiesVersionEnum string

const (
	PostListIdentitiesVersionEnumTwoThousandAndTen1201 PostListIdentitiesVersionEnum = "2010-12-01"
)

type PostListIdentitiesQueryParams struct {
	Action    PostListIdentitiesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxItems  *string                       `queryParam:"style=form,explode=true,name=MaxItems"`
	NextToken *string                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version   PostListIdentitiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListIdentitiesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListIdentitiesRequest struct {
	QueryParams PostListIdentitiesQueryParams
	Headers     PostListIdentitiesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListIdentitiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
