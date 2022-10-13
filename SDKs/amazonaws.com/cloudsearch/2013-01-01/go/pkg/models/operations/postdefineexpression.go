package operations

type PostDefineExpressionActionEnum string

const (
	PostDefineExpressionActionEnumDefineExpression PostDefineExpressionActionEnum = "DefineExpression"
)

type PostDefineExpressionVersionEnum string

const (
	PostDefineExpressionVersionEnumTwoThousandAndThirteen0101 PostDefineExpressionVersionEnum = "2013-01-01"
)

type PostDefineExpressionQueryParams struct {
	Action  PostDefineExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDefineExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDefineExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDefineExpressionRequest struct {
	QueryParams PostDefineExpressionQueryParams
	Headers     PostDefineExpressionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDefineExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
