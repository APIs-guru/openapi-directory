package operations

type PostDescribeVpcEndpointServiceConfigurationsActionEnum string

const (
	PostDescribeVpcEndpointServiceConfigurationsActionEnumDescribeVpcEndpointServiceConfigurations PostDescribeVpcEndpointServiceConfigurationsActionEnum = "DescribeVpcEndpointServiceConfigurations"
)

type PostDescribeVpcEndpointServiceConfigurationsVersionEnum string

const (
	PostDescribeVpcEndpointServiceConfigurationsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointServiceConfigurationsVersionEnum = "2016-11-15"
)

type PostDescribeVpcEndpointServiceConfigurationsQueryParams struct {
	Action     PostDescribeVpcEndpointServiceConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                 `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcEndpointServiceConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcEndpointServiceConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcEndpointServiceConfigurationsRequest struct {
	QueryParams PostDescribeVpcEndpointServiceConfigurationsQueryParams
	Headers     PostDescribeVpcEndpointServiceConfigurationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcEndpointServiceConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
