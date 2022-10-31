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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
