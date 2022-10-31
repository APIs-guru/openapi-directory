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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
