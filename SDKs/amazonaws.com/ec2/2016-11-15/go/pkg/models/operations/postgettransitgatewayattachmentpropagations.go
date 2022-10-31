package operations




type PostGetTransitGatewayAttachmentPropagationsActionEnum string

const (
    PostGetTransitGatewayAttachmentPropagationsActionEnumGetTransitGatewayAttachmentPropagations PostGetTransitGatewayAttachmentPropagationsActionEnum = "GetTransitGatewayAttachmentPropagations"
)



type PostGetTransitGatewayAttachmentPropagationsVersionEnum string

const (
    PostGetTransitGatewayAttachmentPropagationsVersionEnumTwoThousandAndSixteen1115 PostGetTransitGatewayAttachmentPropagationsVersionEnum = "2016-11-15"
)


type PostGetTransitGatewayAttachmentPropagationsQueryParams struct {
    Action PostGetTransitGatewayAttachmentPropagationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostGetTransitGatewayAttachmentPropagationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetTransitGatewayAttachmentPropagationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetTransitGatewayAttachmentPropagationsRequest struct {
    QueryParams PostGetTransitGatewayAttachmentPropagationsQueryParams 
    Headers PostGetTransitGatewayAttachmentPropagationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetTransitGatewayAttachmentPropagationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

