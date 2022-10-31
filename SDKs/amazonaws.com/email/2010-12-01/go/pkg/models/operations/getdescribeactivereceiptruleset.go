package operations

type GetDescribeActiveReceiptRuleSetActionEnum string

const (
	GetDescribeActiveReceiptRuleSetActionEnumDescribeActiveReceiptRuleSet GetDescribeActiveReceiptRuleSetActionEnum = "DescribeActiveReceiptRuleSet"
)

type GetDescribeActiveReceiptRuleSetVersionEnum string

const (
	GetDescribeActiveReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetDescribeActiveReceiptRuleSetVersionEnum = "2010-12-01"
)

type GetDescribeActiveReceiptRuleSetQueryParams struct {
	Action  GetDescribeActiveReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeActiveReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeActiveReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeActiveReceiptRuleSetRequest struct {
	QueryParams GetDescribeActiveReceiptRuleSetQueryParams
	Headers     GetDescribeActiveReceiptRuleSetHeaders
}

type GetDescribeActiveReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
