package operations

type GetDeleteRankExpressionActionEnum string

const (
	GetDeleteRankExpressionActionEnumDeleteRankExpression GetDeleteRankExpressionActionEnum = "DeleteRankExpression"
)

type GetDeleteRankExpressionVersionEnum string

const (
	GetDeleteRankExpressionVersionEnumTwoThousandAndEleven0201 GetDeleteRankExpressionVersionEnum = "2011-02-01"
)

type GetDeleteRankExpressionQueryParams struct {
	Action     GetDeleteRankExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                             `queryParam:"style=form,explode=true,name=DomainName"`
	RankName   string                             `queryParam:"style=form,explode=true,name=RankName"`
	Version    GetDeleteRankExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteRankExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteRankExpressionRequest struct {
	QueryParams GetDeleteRankExpressionQueryParams
	Headers     GetDeleteRankExpressionHeaders
}

type GetDeleteRankExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
