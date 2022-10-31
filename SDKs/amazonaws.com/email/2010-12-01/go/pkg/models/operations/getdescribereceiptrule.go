package operations

type GetDescribeReceiptRuleActionEnum string

const (
	GetDescribeReceiptRuleActionEnumDescribeReceiptRule GetDescribeReceiptRuleActionEnum = "DescribeReceiptRule"
)

type GetDescribeReceiptRuleVersionEnum string

const (
	GetDescribeReceiptRuleVersionEnumTwoThousandAndTen1201 GetDescribeReceiptRuleVersionEnum = "2010-12-01"
)

type GetDescribeReceiptRuleQueryParams struct {
	Action      GetDescribeReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleName    string                            `queryParam:"style=form,explode=true,name=RuleName"`
	RuleSetName string                            `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetDescribeReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReceiptRuleRequest struct {
	QueryParams GetDescribeReceiptRuleQueryParams
	Headers     GetDescribeReceiptRuleHeaders
}

type GetDescribeReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
