package operations

type GetDeleteReceiptRuleSetActionEnum string

const (
	GetDeleteReceiptRuleSetActionEnumDeleteReceiptRuleSet GetDeleteReceiptRuleSetActionEnum = "DeleteReceiptRuleSet"
)

type GetDeleteReceiptRuleSetVersionEnum string

const (
	GetDeleteReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetDeleteReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetDeleteReceiptRuleSetQueryParams struct {
	Action      GetDeleteReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleSetName string                             `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetDeleteReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteReceiptRuleSetRequest struct {
	QueryParams GetDeleteReceiptRuleSetQueryParams
	Headers     GetDeleteReceiptRuleSetHeaders
}

type GetDeleteReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
