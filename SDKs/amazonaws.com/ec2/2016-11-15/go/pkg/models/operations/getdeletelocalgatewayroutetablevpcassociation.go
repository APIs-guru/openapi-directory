package operations

type GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum string

const (
	GetDeleteLocalGatewayRouteTableVpcAssociationActionEnumDeleteLocalGatewayRouteTableVpcAssociation GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum = "DeleteLocalGatewayRouteTableVpcAssociation"
)

type GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum string

const (
	GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnumTwoThousandAndSixteen1115 GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum = "2016-11-15"
)

type GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams struct {
	Action                                 GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                                 *bool                                                    `queryParam:"style=form,explode=true,name=DryRun"`
	LocalGatewayRouteTableVpcAssociationID string                                                   `queryParam:"style=form,explode=true,name=LocalGatewayRouteTableVpcAssociationId"`
	Version                                GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLocalGatewayRouteTableVpcAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteLocalGatewayRouteTableVpcAssociationRequest struct {
	QueryParams GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams
	Headers     GetDeleteLocalGatewayRouteTableVpcAssociationHeaders
}

type GetDeleteLocalGatewayRouteTableVpcAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
