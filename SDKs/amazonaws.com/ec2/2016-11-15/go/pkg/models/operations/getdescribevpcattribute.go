package operations

type GetDescribeVpcAttributeActionEnum string

const (
	GetDescribeVpcAttributeActionEnumDescribeVpcAttribute GetDescribeVpcAttributeActionEnum = "DescribeVpcAttribute"
)

type GetDescribeVpcAttributeAttributeEnum string

const (
	GetDescribeVpcAttributeAttributeEnumEnableDNSSupport   GetDescribeVpcAttributeAttributeEnum = "enableDnsSupport"
	GetDescribeVpcAttributeAttributeEnumEnableDNSHostnames GetDescribeVpcAttributeAttributeEnum = "enableDnsHostnames"
)

type GetDescribeVpcAttributeVersionEnum string

const (
	GetDescribeVpcAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeVpcAttributeVersionEnum = "2016-11-15"
)

type GetDescribeVpcAttributeQueryParams struct {
	Action    GetDescribeVpcAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute GetDescribeVpcAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun    *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	Version   GetDescribeVpcAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
	VpcID     string                               `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDescribeVpcAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeVpcAttributeRequest struct {
	QueryParams GetDescribeVpcAttributeQueryParams
	Headers     GetDescribeVpcAttributeHeaders
}

type GetDescribeVpcAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
