package operations




type PostAttachClassicLinkVpcActionEnum string

const (
    PostAttachClassicLinkVpcActionEnumAttachClassicLinkVpc PostAttachClassicLinkVpcActionEnum = "AttachClassicLinkVpc"
)



type PostAttachClassicLinkVpcVersionEnum string

const (
    PostAttachClassicLinkVpcVersionEnumTwoThousandAndSixteen1115 PostAttachClassicLinkVpcVersionEnum = "2016-11-15"
)


type PostAttachClassicLinkVpcQueryParams struct {
    Action PostAttachClassicLinkVpcActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAttachClassicLinkVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAttachClassicLinkVpcHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAttachClassicLinkVpcRequest struct {
    QueryParams PostAttachClassicLinkVpcQueryParams 
    Headers PostAttachClassicLinkVpcHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAttachClassicLinkVpcResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

