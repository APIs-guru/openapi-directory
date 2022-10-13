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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
