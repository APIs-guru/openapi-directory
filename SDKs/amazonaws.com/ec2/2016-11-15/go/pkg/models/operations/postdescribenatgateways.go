package operations

type PostDescribeNatGatewaysActionEnum string

const (
	PostDescribeNatGatewaysActionEnumDescribeNatGateways PostDescribeNatGatewaysActionEnum = "DescribeNatGateways"
)

type PostDescribeNatGatewaysVersionEnum string

const (
	PostDescribeNatGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeNatGatewaysVersionEnum = "2016-11-15"
)

type PostDescribeNatGatewaysQueryParams struct {
	Action     PostDescribeNatGatewaysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNatGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNatGatewaysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeNatGatewaysRequest struct {
	QueryParams PostDescribeNatGatewaysQueryParams
	Headers     PostDescribeNatGatewaysHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNatGatewaysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
