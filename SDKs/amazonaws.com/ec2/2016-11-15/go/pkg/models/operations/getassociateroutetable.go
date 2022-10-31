package operations

type GetAssociateRouteTableActionEnum string

const (
	GetAssociateRouteTableActionEnumAssociateRouteTable GetAssociateRouteTableActionEnum = "AssociateRouteTable"
)

type GetAssociateRouteTableVersionEnum string

const (
	GetAssociateRouteTableVersionEnumTwoThousandAndSixteen1115 GetAssociateRouteTableVersionEnum = "2016-11-15"
)

type GetAssociateRouteTableQueryParams struct {
	Action       GetAssociateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                             `queryParam:"style=form,explode=true,name=DryRun"`
	GatewayID    *string                           `queryParam:"style=form,explode=true,name=GatewayId"`
	RouteTableID string                            `queryParam:"style=form,explode=true,name=RouteTableId"`
	SubnetID     *string                           `queryParam:"style=form,explode=true,name=SubnetId"`
	Version      GetAssociateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociateRouteTableRequest struct {
	QueryParams GetAssociateRouteTableQueryParams
	Headers     GetAssociateRouteTableHeaders
}

type GetAssociateRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
