package operations

type PostDeleteApplicationActionEnum string

const (
	PostDeleteApplicationActionEnumDeleteApplication PostDeleteApplicationActionEnum = "DeleteApplication"
)

type PostDeleteApplicationVersionEnum string

const (
	PostDeleteApplicationVersionEnumTwoThousandAndTen1201 PostDeleteApplicationVersionEnum = "2010-12-01"
)

type PostDeleteApplicationQueryParams struct {
	Action  PostDeleteApplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteApplicationRequest struct {
	QueryParams PostDeleteApplicationQueryParams
	Headers     PostDeleteApplicationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteApplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
