package operations




type PostSearchTransitGatewayMulticastGroupsActionEnum string

const (
    PostSearchTransitGatewayMulticastGroupsActionEnumSearchTransitGatewayMulticastGroups PostSearchTransitGatewayMulticastGroupsActionEnum = "SearchTransitGatewayMulticastGroups"
)



type PostSearchTransitGatewayMulticastGroupsVersionEnum string

const (
    PostSearchTransitGatewayMulticastGroupsVersionEnumTwoThousandAndSixteen1115 PostSearchTransitGatewayMulticastGroupsVersionEnum = "2016-11-15"
)


type PostSearchTransitGatewayMulticastGroupsQueryParams struct {
    Action PostSearchTransitGatewayMulticastGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostSearchTransitGatewayMulticastGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSearchTransitGatewayMulticastGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSearchTransitGatewayMulticastGroupsRequest struct {
    QueryParams PostSearchTransitGatewayMulticastGroupsQueryParams 
    Headers PostSearchTransitGatewayMulticastGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSearchTransitGatewayMulticastGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

