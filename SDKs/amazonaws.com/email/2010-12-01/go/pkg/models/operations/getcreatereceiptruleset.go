package operations

type GetCreateReceiptRuleSetActionEnum string

const (
	GetCreateReceiptRuleSetActionEnumCreateReceiptRuleSet GetCreateReceiptRuleSetActionEnum = "CreateReceiptRuleSet"
)

type GetCreateReceiptRuleSetVersionEnum string

const (
	GetCreateReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetCreateReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetCreateReceiptRuleSetQueryParams struct {
	Action      GetCreateReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleSetName string                             `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetCreateReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateReceiptRuleSetRequest struct {
	QueryParams GetCreateReceiptRuleSetQueryParams
	Headers     GetCreateReceiptRuleSetHeaders
}

type GetCreateReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
