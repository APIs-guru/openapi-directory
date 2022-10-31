package operations




type GetRejectTransitGatewayVpcAttachmentActionEnum string

const (
    GetRejectTransitGatewayVpcAttachmentActionEnumRejectTransitGatewayVpcAttachment GetRejectTransitGatewayVpcAttachmentActionEnum = "RejectTransitGatewayVpcAttachment"
)



type GetRejectTransitGatewayVpcAttachmentVersionEnum string

const (
    GetRejectTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 GetRejectTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)


type GetRejectTransitGatewayVpcAttachmentQueryParams struct {
    Action GetRejectTransitGatewayVpcAttachmentActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    TransitGatewayAttachmentID string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
    Version GetRejectTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRejectTransitGatewayVpcAttachmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRejectTransitGatewayVpcAttachmentRequest struct {
    QueryParams GetRejectTransitGatewayVpcAttachmentQueryParams 
    Headers GetRejectTransitGatewayVpcAttachmentHeaders 
    
}

type GetRejectTransitGatewayVpcAttachmentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

