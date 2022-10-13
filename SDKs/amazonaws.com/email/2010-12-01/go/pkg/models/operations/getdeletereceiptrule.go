package operations

type GetDeleteReceiptRuleActionEnum string

const (
	GetDeleteReceiptRuleActionEnumDeleteReceiptRule GetDeleteReceiptRuleActionEnum = "DeleteReceiptRule"
)

type GetDeleteReceiptRuleVersionEnum string

const (
	GetDeleteReceiptRuleVersionEnumTwoThousandAndTen1201 GetDeleteReceiptRuleVersionEnum = "2010-12-01"
)

type GetDeleteReceiptRuleQueryParams struct {
	Action      GetDeleteReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleName    string                          `queryParam:"style=form,explode=true,name=RuleName"`
	RuleSetName string                          `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetDeleteReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteReceiptRuleRequest struct {
	QueryParams GetDeleteReceiptRuleQueryParams
	Headers     GetDeleteReceiptRuleHeaders
}

type GetDeleteReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
