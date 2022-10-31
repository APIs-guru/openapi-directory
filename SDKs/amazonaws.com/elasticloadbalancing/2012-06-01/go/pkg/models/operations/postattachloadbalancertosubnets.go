package operations




type PostAttachLoadBalancerToSubnetsActionEnum string

const (
    PostAttachLoadBalancerToSubnetsActionEnumAttachLoadBalancerToSubnets PostAttachLoadBalancerToSubnetsActionEnum = "AttachLoadBalancerToSubnets"
)



type PostAttachLoadBalancerToSubnetsVersionEnum string

const (
    PostAttachLoadBalancerToSubnetsVersionEnumTwoThousandAndTwelve0601 PostAttachLoadBalancerToSubnetsVersionEnum = "2012-06-01"
)


type PostAttachLoadBalancerToSubnetsQueryParams struct {
    Action PostAttachLoadBalancerToSubnetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAttachLoadBalancerToSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAttachLoadBalancerToSubnetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAttachLoadBalancerToSubnetsRequest struct {
    QueryParams PostAttachLoadBalancerToSubnetsQueryParams 
    Headers PostAttachLoadBalancerToSubnetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAttachLoadBalancerToSubnetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

