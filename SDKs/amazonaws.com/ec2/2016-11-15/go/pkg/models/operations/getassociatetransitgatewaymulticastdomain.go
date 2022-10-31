package operations




type GetAssociateTransitGatewayMulticastDomainActionEnum string

const (
    GetAssociateTransitGatewayMulticastDomainActionEnumAssociateTransitGatewayMulticastDomain GetAssociateTransitGatewayMulticastDomainActionEnum = "AssociateTransitGatewayMulticastDomain"
)



type GetAssociateTransitGatewayMulticastDomainVersionEnum string

const (
    GetAssociateTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 GetAssociateTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)


type GetAssociateTransitGatewayMulticastDomainQueryParams struct {
    Action GetAssociateTransitGatewayMulticastDomainActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SubnetIds []string `queryParam:"style=form,explode=true,name=SubnetIds"`
    TransitGatewayAttachmentID *string `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
    TransitGatewayMulticastDomainID *string `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
    Version GetAssociateTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAssociateTransitGatewayMulticastDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssociateTransitGatewayMulticastDomainRequest struct {
    QueryParams GetAssociateTransitGatewayMulticastDomainQueryParams 
    Headers GetAssociateTransitGatewayMulticastDomainHeaders 
    
}

type GetAssociateTransitGatewayMulticastDomainResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

