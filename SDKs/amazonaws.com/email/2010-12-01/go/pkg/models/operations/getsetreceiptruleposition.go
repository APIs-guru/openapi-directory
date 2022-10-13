package operations

type GetSetReceiptRulePositionActionEnum string

const (
	GetSetReceiptRulePositionActionEnumSetReceiptRulePosition GetSetReceiptRulePositionActionEnum = "SetReceiptRulePosition"
)

type GetSetReceiptRulePositionVersionEnum string

const (
	GetSetReceiptRulePositionVersionEnumTwoThousandAndTen1201 GetSetReceiptRulePositionVersionEnum = "2010-12-01"
)

type GetSetReceiptRulePositionQueryParams struct {
	Action      GetSetReceiptRulePositionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	After       *string                              `queryParam:"style=form,explode=true,name=After"`
	RuleName    string                               `queryParam:"style=form,explode=true,name=RuleName"`
	RuleSetName string                               `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetSetReceiptRulePositionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetReceiptRulePositionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetReceiptRulePositionRequest struct {
	QueryParams GetSetReceiptRulePositionQueryParams
	Headers     GetSetReceiptRulePositionHeaders
}

type GetSetReceiptRulePositionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
