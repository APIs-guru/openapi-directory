package operations




type GetRejectTransitGatewayMulticastDomainAssociationsActionEnum string

const (
    GetRejectTransitGatewayMulticastDomainAssociationsActionEnumRejectTransitGatewayMulticastDomainAssociations GetRejectTransitGatewayMulticastDomainAssociationsActionEnum = "RejectTransitGatewayMulticastDomainAssociations"
)



type GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum string

const (
    GetRejectTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115 GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum = "2016-11-15"
)


type GetRejectTransitGatewayMulticastDomainAssociationsQueryParams struct {
    Action GetRejectTransitGatewayMulticastDomainAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SubnetIds []string `queryParam:"style=form,explode=true,name=SubnetIds"`
    TransitGatewayAttachmentID *string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
    TransitGatewayMulticastDomainID *string `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
    Version GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRejectTransitGatewayMulticastDomainAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRejectTransitGatewayMulticastDomainAssociationsRequest struct {
    QueryParams GetRejectTransitGatewayMulticastDomainAssociationsQueryParams 
    Headers GetRejectTransitGatewayMulticastDomainAssociationsHeaders 
    
}

type GetRejectTransitGatewayMulticastDomainAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

