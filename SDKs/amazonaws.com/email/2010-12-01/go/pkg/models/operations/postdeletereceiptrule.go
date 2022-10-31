package operations

type PostDeleteReceiptRuleActionEnum string

const (
	PostDeleteReceiptRuleActionEnumDeleteReceiptRule PostDeleteReceiptRuleActionEnum = "DeleteReceiptRule"
)

type PostDeleteReceiptRuleVersionEnum string

const (
	PostDeleteReceiptRuleVersionEnumTwoThousandAndTen1201 PostDeleteReceiptRuleVersionEnum = "2010-12-01"
)

type PostDeleteReceiptRuleQueryParams struct {
	Action  PostDeleteReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteReceiptRuleRequest struct {
	QueryParams PostDeleteReceiptRuleQueryParams
	Headers     PostDeleteReceiptRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
