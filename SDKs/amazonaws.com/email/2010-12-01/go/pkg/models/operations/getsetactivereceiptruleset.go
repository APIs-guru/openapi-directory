package operations

type GetSetActiveReceiptRuleSetActionEnum string

const (
	GetSetActiveReceiptRuleSetActionEnumSetActiveReceiptRuleSet GetSetActiveReceiptRuleSetActionEnum = "SetActiveReceiptRuleSet"
)

type GetSetActiveReceiptRuleSetVersionEnum string

const (
	GetSetActiveReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetSetActiveReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetSetActiveReceiptRuleSetQueryParams struct {
	Action      GetSetActiveReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleSetName *string                               `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetSetActiveReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetActiveReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetActiveReceiptRuleSetRequest struct {
	QueryParams GetSetActiveReceiptRuleSetQueryParams
	Headers     GetSetActiveReceiptRuleSetHeaders
}

type GetSetActiveReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
