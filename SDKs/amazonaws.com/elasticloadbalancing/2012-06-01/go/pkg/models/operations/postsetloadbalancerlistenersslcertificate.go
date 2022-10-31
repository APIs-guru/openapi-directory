package operations




type PostSetLoadBalancerListenerSslCertificateActionEnum string

const (
    PostSetLoadBalancerListenerSslCertificateActionEnumSetLoadBalancerListenerSslCertificate PostSetLoadBalancerListenerSslCertificateActionEnum = "SetLoadBalancerListenerSSLCertificate"
)



type PostSetLoadBalancerListenerSslCertificateVersionEnum string

const (
    PostSetLoadBalancerListenerSslCertificateVersionEnumTwoThousandAndTwelve0601 PostSetLoadBalancerListenerSslCertificateVersionEnum = "2012-06-01"
)


type PostSetLoadBalancerListenerSslCertificateQueryParams struct {
    Action PostSetLoadBalancerListenerSslCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSetLoadBalancerListenerSslCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSetLoadBalancerListenerSslCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSetLoadBalancerListenerSslCertificateRequest struct {
    QueryParams PostSetLoadBalancerListenerSslCertificateQueryParams 
    Headers PostSetLoadBalancerListenerSslCertificateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSetLoadBalancerListenerSslCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

