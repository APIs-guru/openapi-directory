package operations

type PostAddTagsActionEnum string

const (
	PostAddTagsActionEnumAddTags PostAddTagsActionEnum = "AddTags"
)

type PostAddTagsVersionEnum string

const (
	PostAddTagsVersionEnumTwoThousandAndTwelve0601 PostAddTagsVersionEnum = "2012-06-01"
)

type PostAddTagsQueryParams struct {
	Action  PostAddTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAddTagsRequest struct {
	QueryParams PostAddTagsQueryParams
	Headers     PostAddTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
