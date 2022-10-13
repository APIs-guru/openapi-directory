package operations

type PostUpdateApplicationActionEnum string

const (
	PostUpdateApplicationActionEnumUpdateApplication PostUpdateApplicationActionEnum = "UpdateApplication"
)

type PostUpdateApplicationVersionEnum string

const (
	PostUpdateApplicationVersionEnumTwoThousandAndTen1201 PostUpdateApplicationVersionEnum = "2010-12-01"
)

type PostUpdateApplicationQueryParams struct {
	Action  PostUpdateApplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateApplicationRequest struct {
	QueryParams PostUpdateApplicationQueryParams
	Headers     PostUpdateApplicationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateApplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
