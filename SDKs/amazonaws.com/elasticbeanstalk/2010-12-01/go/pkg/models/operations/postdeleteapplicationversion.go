package operations

type PostDeleteApplicationVersionActionEnum string

const (
	PostDeleteApplicationVersionActionEnumDeleteApplicationVersion PostDeleteApplicationVersionActionEnum = "DeleteApplicationVersion"
)

type PostDeleteApplicationVersionVersionEnum string

const (
	PostDeleteApplicationVersionVersionEnumTwoThousandAndTen1201 PostDeleteApplicationVersionVersionEnum = "2010-12-01"
)

type PostDeleteApplicationVersionQueryParams struct {
	Action  PostDeleteApplicationVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteApplicationVersionRequest struct {
	QueryParams PostDeleteApplicationVersionQueryParams
	Headers     PostDeleteApplicationVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteApplicationVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
