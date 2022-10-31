package operations

type PostDeleteRankExpressionActionEnum string

const (
	PostDeleteRankExpressionActionEnumDeleteRankExpression PostDeleteRankExpressionActionEnum = "DeleteRankExpression"
)

type PostDeleteRankExpressionVersionEnum string

const (
	PostDeleteRankExpressionVersionEnumTwoThousandAndEleven0201 PostDeleteRankExpressionVersionEnum = "2011-02-01"
)

type PostDeleteRankExpressionQueryParams struct {
	Action  PostDeleteRankExpressionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteRankExpressionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteRankExpressionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteRankExpressionRequest struct {
	QueryParams PostDeleteRankExpressionQueryParams
	Headers     PostDeleteRankExpressionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteRankExpressionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
