package operations

type PostCreateApplicationVersionActionEnum string

const (
	PostCreateApplicationVersionActionEnumCreateApplicationVersion PostCreateApplicationVersionActionEnum = "CreateApplicationVersion"
)

type PostCreateApplicationVersionVersionEnum string

const (
	PostCreateApplicationVersionVersionEnumTwoThousandAndTen1201 PostCreateApplicationVersionVersionEnum = "2010-12-01"
)

type PostCreateApplicationVersionQueryParams struct {
	Action  PostCreateApplicationVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateApplicationVersionRequest struct {
	QueryParams PostCreateApplicationVersionQueryParams
	Headers     PostCreateApplicationVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateApplicationVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
