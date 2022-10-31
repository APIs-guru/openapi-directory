package operations




type PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum string

const (
    PostDeregisterTransitGatewayMulticastGroupSourcesActionEnumDeregisterTransitGatewayMulticastGroupSources PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum = "DeregisterTransitGatewayMulticastGroupSources"
)



type PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum string

const (
    PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnumTwoThousandAndSixteen1115 PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum = "2016-11-15"
)


type PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams struct {
    Action PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeregisterTransitGatewayMulticastGroupSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeregisterTransitGatewayMulticastGroupSourcesRequest struct {
    QueryParams PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams 
    Headers PostDeregisterTransitGatewayMulticastGroupSourcesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeregisterTransitGatewayMulticastGroupSourcesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

