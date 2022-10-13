package operations

type PostDescribeCustomerGatewaysActionEnum string

const (
	PostDescribeCustomerGatewaysActionEnumDescribeCustomerGateways PostDescribeCustomerGatewaysActionEnum = "DescribeCustomerGateways"
)

type PostDescribeCustomerGatewaysVersionEnum string

const (
	PostDescribeCustomerGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeCustomerGatewaysVersionEnum = "2016-11-15"
)

type PostDescribeCustomerGatewaysQueryParams struct {
	Action  PostDescribeCustomerGatewaysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeCustomerGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCustomerGatewaysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCustomerGatewaysRequest struct {
	QueryParams PostDescribeCustomerGatewaysQueryParams
	Headers     PostDescribeCustomerGatewaysHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCustomerGatewaysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
