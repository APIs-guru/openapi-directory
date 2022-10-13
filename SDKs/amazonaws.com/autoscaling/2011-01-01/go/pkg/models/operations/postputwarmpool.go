package operations

type PostPutWarmPoolActionEnum string

const (
	PostPutWarmPoolActionEnumPutWarmPool PostPutWarmPoolActionEnum = "PutWarmPool"
)

type PostPutWarmPoolVersionEnum string

const (
	PostPutWarmPoolVersionEnumTwoThousandAndEleven0101 PostPutWarmPoolVersionEnum = "2011-01-01"
)

type PostPutWarmPoolQueryParams struct {
	Action  PostPutWarmPoolActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutWarmPoolHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutWarmPoolRequest struct {
	QueryParams PostPutWarmPoolQueryParams
	Headers     PostPutWarmPoolHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutWarmPoolResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
