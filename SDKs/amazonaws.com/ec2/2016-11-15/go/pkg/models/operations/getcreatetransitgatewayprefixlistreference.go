package operations

type GetCreateTransitGatewayPrefixListReferenceActionEnum string

const (
	GetCreateTransitGatewayPrefixListReferenceActionEnumCreateTransitGatewayPrefixListReference GetCreateTransitGatewayPrefixListReferenceActionEnum = "CreateTransitGatewayPrefixListReference"
)

type GetCreateTransitGatewayPrefixListReferenceVersionEnum string

const (
	GetCreateTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 GetCreateTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

type GetCreateTransitGatewayPrefixListReferenceQueryParams struct {
	Action                     GetCreateTransitGatewayPrefixListReferenceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Blackhole                  *bool                                                 `queryParam:"style=form,explode=true,name=Blackhole"`
	DryRun                     *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	PrefixListID               string                                                `queryParam:"style=form,explode=true,name=PrefixListId"`
	TransitGatewayAttachmentID *string                                               `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                                `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetCreateTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateTransitGatewayPrefixListReferenceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateTransitGatewayPrefixListReferenceRequest struct {
	QueryParams GetCreateTransitGatewayPrefixListReferenceQueryParams
	Headers     GetCreateTransitGatewayPrefixListReferenceHeaders
}

type GetCreateTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
