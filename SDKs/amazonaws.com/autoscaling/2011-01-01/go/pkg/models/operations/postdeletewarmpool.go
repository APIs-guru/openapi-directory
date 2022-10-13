package operations

type PostDeleteWarmPoolActionEnum string

const (
	PostDeleteWarmPoolActionEnumDeleteWarmPool PostDeleteWarmPoolActionEnum = "DeleteWarmPool"
)

type PostDeleteWarmPoolVersionEnum string

const (
	PostDeleteWarmPoolVersionEnumTwoThousandAndEleven0101 PostDeleteWarmPoolVersionEnum = "2011-01-01"
)

type PostDeleteWarmPoolQueryParams struct {
	Action  PostDeleteWarmPoolActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteWarmPoolHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteWarmPoolRequest struct {
	QueryParams PostDeleteWarmPoolQueryParams
	Headers     PostDeleteWarmPoolHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteWarmPoolResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
