package operations




type PostModifyTransitGatewayVpcAttachmentActionEnum string

const (
    PostModifyTransitGatewayVpcAttachmentActionEnumModifyTransitGatewayVpcAttachment PostModifyTransitGatewayVpcAttachmentActionEnum = "ModifyTransitGatewayVpcAttachment"
)



type PostModifyTransitGatewayVpcAttachmentVersionEnum string

const (
    PostModifyTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 PostModifyTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)


type PostModifyTransitGatewayVpcAttachmentQueryParams struct {
    Action PostModifyTransitGatewayVpcAttachmentActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyTransitGatewayVpcAttachmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyTransitGatewayVpcAttachmentRequest struct {
    QueryParams PostModifyTransitGatewayVpcAttachmentQueryParams 
    Headers PostModifyTransitGatewayVpcAttachmentHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyTransitGatewayVpcAttachmentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

