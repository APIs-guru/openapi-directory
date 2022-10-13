package operations

type GetDeleteExpressionActionEnum string

const (
	GetDeleteExpressionActionEnumDeleteExpression GetDeleteExpressionActionEnum = "DeleteExpression"
)

type GetDeleteExpressionVersionEnum string

const (
	GetDeleteExpressionVersionEnumTwoThousandAndThirteen0101 GetDeleteExpressionVersionEnum = "2013-01-01"
)

type GetDeleteExpressionQueryParams struct {
	Action         GetDeleteExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName     string                         `queryParam:"style=form,explode=true,name=DomainName"`
	ExpressionName string                         `queryParam:"style=form,explode=true,name=ExpressionName"`
	Version        GetDeleteExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteExpressionRequest struct {
	QueryParams GetDeleteExpressionQueryParams
	Headers     GetDeleteExpressionHeaders
}

type GetDeleteExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
