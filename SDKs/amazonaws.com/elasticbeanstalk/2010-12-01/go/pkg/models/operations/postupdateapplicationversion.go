package operations

type PostUpdateApplicationVersionActionEnum string

const (
	PostUpdateApplicationVersionActionEnumUpdateApplicationVersion PostUpdateApplicationVersionActionEnum = "UpdateApplicationVersion"
)

type PostUpdateApplicationVersionVersionEnum string

const (
	PostUpdateApplicationVersionVersionEnumTwoThousandAndTen1201 PostUpdateApplicationVersionVersionEnum = "2010-12-01"
)

type PostUpdateApplicationVersionQueryParams struct {
	Action  PostUpdateApplicationVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateApplicationVersionRequest struct {
	QueryParams PostUpdateApplicationVersionQueryParams
	Headers     PostUpdateApplicationVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateApplicationVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
