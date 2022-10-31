package operations




type GetRegisterTransitGatewayMulticastGroupSourcesActionEnum string

const (
    GetRegisterTransitGatewayMulticastGroupSourcesActionEnumRegisterTransitGatewayMulticastGroupSources GetRegisterTransitGatewayMulticastGroupSourcesActionEnum = "RegisterTransitGatewayMulticastGroupSources"
)



type GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum string

const (
    GetRegisterTransitGatewayMulticastGroupSourcesVersionEnumTwoThousandAndSixteen1115 GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum = "2016-11-15"
)


type GetRegisterTransitGatewayMulticastGroupSourcesQueryParams struct {
    Action GetRegisterTransitGatewayMulticastGroupSourcesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    GroupIPAddress *string `queryParam:"style=form,explode=true,name=GroupIpAddress"`
    NetworkInterfaceIds []string `queryParam:"style=form,explode=true,name=NetworkInterfaceIds"`
    TransitGatewayMulticastDomainID *string `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
    Version GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRegisterTransitGatewayMulticastGroupSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRegisterTransitGatewayMulticastGroupSourcesRequest struct {
    QueryParams GetRegisterTransitGatewayMulticastGroupSourcesQueryParams 
    Headers GetRegisterTransitGatewayMulticastGroupSourcesHeaders 
    
}

type GetRegisterTransitGatewayMulticastGroupSourcesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

