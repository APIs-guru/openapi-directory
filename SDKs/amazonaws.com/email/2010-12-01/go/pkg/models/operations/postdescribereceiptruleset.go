package operations

type PostDescribeReceiptRuleSetActionEnum string

const (
	PostDescribeReceiptRuleSetActionEnumDescribeReceiptRuleSet PostDescribeReceiptRuleSetActionEnum = "DescribeReceiptRuleSet"
)

type PostDescribeReceiptRuleSetVersionEnum string

const (
	PostDescribeReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostDescribeReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostDescribeReceiptRuleSetQueryParams struct {
	Action  PostDescribeReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReceiptRuleSetRequest struct {
	QueryParams PostDescribeReceiptRuleSetQueryParams
	Headers     PostDescribeReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
