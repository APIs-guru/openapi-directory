package operations




type GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum string

const (
    GetAcceptTransitGatewayMulticastDomainAssociationsActionEnumAcceptTransitGatewayMulticastDomainAssociations GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum = "AcceptTransitGatewayMulticastDomainAssociations"
)



type GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum string

const (
    GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115 GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum = "2016-11-15"
)


type GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams struct {
    Action GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SubnetIds []string `queryParam:"style=form,explode=true,name=SubnetIds"`
    TransitGatewayAttachmentID *string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
    TransitGatewayMulticastDomainID *string `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
    Version GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAcceptTransitGatewayMulticastDomainAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAcceptTransitGatewayMulticastDomainAssociationsRequest struct {
    QueryParams GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams 
    Headers GetAcceptTransitGatewayMulticastDomainAssociationsHeaders 
    
}

type GetAcceptTransitGatewayMulticastDomainAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

