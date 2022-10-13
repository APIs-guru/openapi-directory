package operations

type PostDeleteExpressionActionEnum string

const (
	PostDeleteExpressionActionEnumDeleteExpression PostDeleteExpressionActionEnum = "DeleteExpression"
)

type PostDeleteExpressionVersionEnum string

const (
	PostDeleteExpressionVersionEnumTwoThousandAndThirteen0101 PostDeleteExpressionVersionEnum = "2013-01-01"
)

type PostDeleteExpressionQueryParams struct {
	Action  PostDeleteExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteExpressionRequest struct {
	QueryParams PostDeleteExpressionQueryParams
	Headers     PostDeleteExpressionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
