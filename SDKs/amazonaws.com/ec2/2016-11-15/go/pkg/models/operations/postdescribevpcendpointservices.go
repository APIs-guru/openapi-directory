package operations

type PostDescribeVpcEndpointServicesActionEnum string

const (
	PostDescribeVpcEndpointServicesActionEnumDescribeVpcEndpointServices PostDescribeVpcEndpointServicesActionEnum = "DescribeVpcEndpointServices"
)

type PostDescribeVpcEndpointServicesVersionEnum string

const (
	PostDescribeVpcEndpointServicesVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointServicesVersionEnum = "2016-11-15"
)

type PostDescribeVpcEndpointServicesQueryParams struct {
	Action  PostDescribeVpcEndpointServicesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeVpcEndpointServicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcEndpointServicesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcEndpointServicesRequest struct {
	QueryParams PostDescribeVpcEndpointServicesQueryParams
	Headers     PostDescribeVpcEndpointServicesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcEndpointServicesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
