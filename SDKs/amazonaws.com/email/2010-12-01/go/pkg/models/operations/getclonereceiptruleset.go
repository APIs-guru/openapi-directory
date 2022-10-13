package operations

type GetCloneReceiptRuleSetActionEnum string

const (
	GetCloneReceiptRuleSetActionEnumCloneReceiptRuleSet GetCloneReceiptRuleSetActionEnum = "CloneReceiptRuleSet"
)

type GetCloneReceiptRuleSetVersionEnum string

const (
	GetCloneReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetCloneReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetCloneReceiptRuleSetQueryParams struct {
	Action              GetCloneReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	OriginalRuleSetName string                            `queryParam:"style=form,explode=true,name=OriginalRuleSetName"`
	RuleSetName         string                            `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version             GetCloneReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCloneReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCloneReceiptRuleSetRequest struct {
	QueryParams GetCloneReceiptRuleSetQueryParams
	Headers     GetCloneReceiptRuleSetHeaders
}

type GetCloneReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
