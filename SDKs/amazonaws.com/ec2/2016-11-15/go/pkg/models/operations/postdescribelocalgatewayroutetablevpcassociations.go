package operations

type PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum string

const (
	PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnumDescribeLocalGatewayRouteTableVpcAssociations PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum = "DescribeLocalGatewayRouteTableVpcAssociations"
)

type PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum string

const (
	PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnumTwoThousandAndSixteen1115 PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum = "2016-11-15"
)

type PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams struct {
	Action     PostDescribeLocalGatewayRouteTableVpcAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                      `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                      `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeLocalGatewayRouteTableVpcAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLocalGatewayRouteTableVpcAssociationsRequest struct {
	QueryParams PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams
	Headers     PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLocalGatewayRouteTableVpcAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
