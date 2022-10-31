package operations

type PostDescribeActiveReceiptRuleSetActionEnum string

const (
	PostDescribeActiveReceiptRuleSetActionEnumDescribeActiveReceiptRuleSet PostDescribeActiveReceiptRuleSetActionEnum = "DescribeActiveReceiptRuleSet"
)

type PostDescribeActiveReceiptRuleSetVersionEnum string

const (
	PostDescribeActiveReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostDescribeActiveReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostDescribeActiveReceiptRuleSetQueryParams struct {
	Action  PostDescribeActiveReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeActiveReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeActiveReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeActiveReceiptRuleSetRequest struct {
	QueryParams PostDescribeActiveReceiptRuleSetQueryParams
	Headers     PostDescribeActiveReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeActiveReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
