package operations




type PostAcceptTransitGatewayPeeringAttachmentActionEnum string

const (
    PostAcceptTransitGatewayPeeringAttachmentActionEnumAcceptTransitGatewayPeeringAttachment PostAcceptTransitGatewayPeeringAttachmentActionEnum = "AcceptTransitGatewayPeeringAttachment"
)



type PostAcceptTransitGatewayPeeringAttachmentVersionEnum string

const (
    PostAcceptTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 PostAcceptTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)


type PostAcceptTransitGatewayPeeringAttachmentQueryParams struct {
    Action PostAcceptTransitGatewayPeeringAttachmentActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAcceptTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAcceptTransitGatewayPeeringAttachmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAcceptTransitGatewayPeeringAttachmentRequest struct {
    QueryParams PostAcceptTransitGatewayPeeringAttachmentQueryParams 
    Headers PostAcceptTransitGatewayPeeringAttachmentHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAcceptTransitGatewayPeeringAttachmentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

