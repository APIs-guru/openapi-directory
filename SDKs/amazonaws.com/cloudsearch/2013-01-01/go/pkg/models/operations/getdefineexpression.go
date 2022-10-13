package operations

type GetDefineExpressionActionEnum string

const (
	GetDefineExpressionActionEnumDefineExpression GetDefineExpressionActionEnum = "DefineExpression"
)

type GetDefineExpressionExpression struct {
	ExpressionName  string `queryParam:"name=ExpressionName"`
	ExpressionValue string `queryParam:"name=ExpressionValue"`
}

type GetDefineExpressionVersionEnum string

const (
	GetDefineExpressionVersionEnumTwoThousandAndThirteen0101 GetDefineExpressionVersionEnum = "2013-01-01"
)

type GetDefineExpressionQueryParams struct {
	Action     GetDefineExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                         `queryParam:"style=form,explode=true,name=DomainName"`
	Expression GetDefineExpressionExpression  `queryParam:"style=form,explode=true,name=Expression"`
	Version    GetDefineExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDefineExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDefineExpressionRequest struct {
	QueryParams GetDefineExpressionQueryParams
	Headers     GetDefineExpressionHeaders
}

type GetDefineExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
