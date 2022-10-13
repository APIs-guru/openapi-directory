package operations

type PostCreateLocalGatewayRouteTableVpcAssociationActionEnum string

const (
	PostCreateLocalGatewayRouteTableVpcAssociationActionEnumCreateLocalGatewayRouteTableVpcAssociation PostCreateLocalGatewayRouteTableVpcAssociationActionEnum = "CreateLocalGatewayRouteTableVpcAssociation"
)

type PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum string

const (
	PostCreateLocalGatewayRouteTableVpcAssociationVersionEnumTwoThousandAndSixteen1115 PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum = "2016-11-15"
)

type PostCreateLocalGatewayRouteTableVpcAssociationQueryParams struct {
	Action  PostCreateLocalGatewayRouteTableVpcAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLocalGatewayRouteTableVpcAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLocalGatewayRouteTableVpcAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateLocalGatewayRouteTableVpcAssociationRequest struct {
	QueryParams PostCreateLocalGatewayRouteTableVpcAssociationQueryParams
	Headers     PostCreateLocalGatewayRouteTableVpcAssociationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLocalGatewayRouteTableVpcAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
