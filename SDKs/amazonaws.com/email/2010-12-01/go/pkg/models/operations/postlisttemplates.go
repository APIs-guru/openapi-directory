package operations

type PostListTemplatesActionEnum string

const (
	PostListTemplatesActionEnumListTemplates PostListTemplatesActionEnum = "ListTemplates"
)

type PostListTemplatesVersionEnum string

const (
	PostListTemplatesVersionEnumTwoThousandAndTen1201 PostListTemplatesVersionEnum = "2010-12-01"
)

type PostListTemplatesQueryParams struct {
	Action  PostListTemplatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListTemplatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListTemplatesRequest struct {
	QueryParams PostListTemplatesQueryParams
	Headers     PostListTemplatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListTemplatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
