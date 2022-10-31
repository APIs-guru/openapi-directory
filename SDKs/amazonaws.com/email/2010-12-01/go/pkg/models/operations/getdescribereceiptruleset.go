package operations

type GetDescribeReceiptRuleSetActionEnum string

const (
	GetDescribeReceiptRuleSetActionEnumDescribeReceiptRuleSet GetDescribeReceiptRuleSetActionEnum = "DescribeReceiptRuleSet"
)

type GetDescribeReceiptRuleSetVersionEnum string

const (
	GetDescribeReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetDescribeReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetDescribeReceiptRuleSetQueryParams struct {
	Action      GetDescribeReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleSetName string                               `queryParam:"style=form,explode=true,name=RuleSetName"`
	Version     GetDescribeReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReceiptRuleSetRequest struct {
	QueryParams GetDescribeReceiptRuleSetQueryParams
	Headers     GetDescribeReceiptRuleSetHeaders
}

type GetDescribeReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
