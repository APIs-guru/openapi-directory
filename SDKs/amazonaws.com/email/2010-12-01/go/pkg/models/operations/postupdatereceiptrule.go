package operations

type PostUpdateReceiptRuleActionEnum string

const (
	PostUpdateReceiptRuleActionEnumUpdateReceiptRule PostUpdateReceiptRuleActionEnum = "UpdateReceiptRule"
)

type PostUpdateReceiptRuleVersionEnum string

const (
	PostUpdateReceiptRuleVersionEnumTwoThousandAndTen1201 PostUpdateReceiptRuleVersionEnum = "2010-12-01"
)

type PostUpdateReceiptRuleQueryParams struct {
	Action  PostUpdateReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateReceiptRuleRequest struct {
	QueryParams PostUpdateReceiptRuleQueryParams
	Headers     PostUpdateReceiptRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
