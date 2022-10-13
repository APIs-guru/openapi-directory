package operations

type GetDefineRankExpressionActionEnum string

const (
	GetDefineRankExpressionActionEnumDefineRankExpression GetDefineRankExpressionActionEnum = "DefineRankExpression"
)

type GetDefineRankExpressionRankExpression struct {
	RankExpression string `queryParam:"name=RankExpression"`
	RankName       string `queryParam:"name=RankName"`
}

type GetDefineRankExpressionVersionEnum string

const (
	GetDefineRankExpressionVersionEnumTwoThousandAndEleven0201 GetDefineRankExpressionVersionEnum = "2011-02-01"
)

type GetDefineRankExpressionQueryParams struct {
	Action         GetDefineRankExpressionActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	DomainName     string                                `queryParam:"style=form,explode=true,name=DomainName"`
	RankExpression GetDefineRankExpressionRankExpression `queryParam:"style=form,explode=true,name=RankExpression"`
	Version        GetDefineRankExpressionVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetDefineRankExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDefineRankExpressionRequest struct {
	QueryParams GetDefineRankExpressionQueryParams
	Headers     GetDefineRankExpressionHeaders
}

type GetDefineRankExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
