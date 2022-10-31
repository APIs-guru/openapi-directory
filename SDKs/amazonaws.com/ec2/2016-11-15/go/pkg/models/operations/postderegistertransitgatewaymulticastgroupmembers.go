package operations




type PostDeregisterTransitGatewayMulticastGroupMembersActionEnum string

const (
    PostDeregisterTransitGatewayMulticastGroupMembersActionEnumDeregisterTransitGatewayMulticastGroupMembers PostDeregisterTransitGatewayMulticastGroupMembersActionEnum = "DeregisterTransitGatewayMulticastGroupMembers"
)



type PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum string

const (
    PostDeregisterTransitGatewayMulticastGroupMembersVersionEnumTwoThousandAndSixteen1115 PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum = "2016-11-15"
)


type PostDeregisterTransitGatewayMulticastGroupMembersQueryParams struct {
    Action PostDeregisterTransitGatewayMulticastGroupMembersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeregisterTransitGatewayMulticastGroupMembersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeregisterTransitGatewayMulticastGroupMembersRequest struct {
    QueryParams PostDeregisterTransitGatewayMulticastGroupMembersQueryParams 
    Headers PostDeregisterTransitGatewayMulticastGroupMembersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeregisterTransitGatewayMulticastGroupMembersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

