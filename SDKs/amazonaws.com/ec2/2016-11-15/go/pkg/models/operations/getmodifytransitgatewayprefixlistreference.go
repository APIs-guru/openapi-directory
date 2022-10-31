package operations




type GetModifyTransitGatewayPrefixListReferenceActionEnum string

const (
    GetModifyTransitGatewayPrefixListReferenceActionEnumModifyTransitGatewayPrefixListReference GetModifyTransitGatewayPrefixListReferenceActionEnum = "ModifyTransitGatewayPrefixListReference"
)



type GetModifyTransitGatewayPrefixListReferenceVersionEnum string

const (
    GetModifyTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 GetModifyTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)


type GetModifyTransitGatewayPrefixListReferenceQueryParams struct {
    Action GetModifyTransitGatewayPrefixListReferenceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Blackhole *bool `queryParam:"style=form,explode=true,name=Blackhole"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    PrefixListID string `queryParam:"style=form,explode=true,name=PrefixListId"`
    TransitGatewayAttachmentID *string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
    TransitGatewayRouteTableID string `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
    Version GetModifyTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyTransitGatewayPrefixListReferenceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyTransitGatewayPrefixListReferenceRequest struct {
    QueryParams GetModifyTransitGatewayPrefixListReferenceQueryParams 
    Headers GetModifyTransitGatewayPrefixListReferenceHeaders 
    
}

type GetModifyTransitGatewayPrefixListReferenceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

