package operations

type PostCreateApplicationActionEnum string

const (
	PostCreateApplicationActionEnumCreateApplication PostCreateApplicationActionEnum = "CreateApplication"
)

type PostCreateApplicationVersionEnum string

const (
	PostCreateApplicationVersionEnumTwoThousandAndTen1201 PostCreateApplicationVersionEnum = "2010-12-01"
)

type PostCreateApplicationQueryParams struct {
	Action  PostCreateApplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateApplicationRequest struct {
	QueryParams PostCreateApplicationQueryParams
	Headers     PostCreateApplicationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateApplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
