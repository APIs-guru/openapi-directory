package operations

type PostCreateReceiptRuleActionEnum string

const (
	PostCreateReceiptRuleActionEnumCreateReceiptRule PostCreateReceiptRuleActionEnum = "CreateReceiptRule"
)

type PostCreateReceiptRuleVersionEnum string

const (
	PostCreateReceiptRuleVersionEnumTwoThousandAndTen1201 PostCreateReceiptRuleVersionEnum = "2010-12-01"
)

type PostCreateReceiptRuleQueryParams struct {
	Action  PostCreateReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateReceiptRuleRequest struct {
	QueryParams PostCreateReceiptRuleQueryParams
	Headers     PostCreateReceiptRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
