package operations

type GetDeleteTransitGatewayPrefixListReferenceActionEnum string

const (
	GetDeleteTransitGatewayPrefixListReferenceActionEnumDeleteTransitGatewayPrefixListReference GetDeleteTransitGatewayPrefixListReferenceActionEnum = "DeleteTransitGatewayPrefixListReference"
)

type GetDeleteTransitGatewayPrefixListReferenceVersionEnum string

const (
	GetDeleteTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayPrefixListReferenceQueryParams struct {
	Action                     GetDeleteTransitGatewayPrefixListReferenceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	PrefixListID               string                                                `queryParam:"style=form,explode=true,name=PrefixListId"`
	TransitGatewayRouteTableID string                                                `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetDeleteTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayPrefixListReferenceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayPrefixListReferenceRequest struct {
	QueryParams GetDeleteTransitGatewayPrefixListReferenceQueryParams
	Headers     GetDeleteTransitGatewayPrefixListReferenceHeaders
}

type GetDeleteTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
