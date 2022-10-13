package operations

type PostDescribeReceiptRuleActionEnum string

const (
	PostDescribeReceiptRuleActionEnumDescribeReceiptRule PostDescribeReceiptRuleActionEnum = "DescribeReceiptRule"
)

type PostDescribeReceiptRuleVersionEnum string

const (
	PostDescribeReceiptRuleVersionEnumTwoThousandAndTen1201 PostDescribeReceiptRuleVersionEnum = "2010-12-01"
)

type PostDescribeReceiptRuleQueryParams struct {
	Action  PostDescribeReceiptRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeReceiptRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReceiptRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReceiptRuleRequest struct {
	QueryParams PostDescribeReceiptRuleQueryParams
	Headers     PostDescribeReceiptRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReceiptRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
