package operations




type PostDetachLoadBalancersActionEnum string

const (
    PostDetachLoadBalancersActionEnumDetachLoadBalancers PostDetachLoadBalancersActionEnum = "DetachLoadBalancers"
)



type PostDetachLoadBalancersVersionEnum string

const (
    PostDetachLoadBalancersVersionEnumTwoThousandAndEleven0101 PostDetachLoadBalancersVersionEnum = "2011-01-01"
)


type PostDetachLoadBalancersQueryParams struct {
    Action PostDetachLoadBalancersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDetachLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDetachLoadBalancersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDetachLoadBalancersRequest struct {
    QueryParams PostDetachLoadBalancersQueryParams 
    Headers PostDetachLoadBalancersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDetachLoadBalancersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

