package operations




type GetSetLoadBalancerListenerSslCertificateActionEnum string

const (
    GetSetLoadBalancerListenerSslCertificateActionEnumSetLoadBalancerListenerSslCertificate GetSetLoadBalancerListenerSslCertificateActionEnum = "SetLoadBalancerListenerSSLCertificate"
)



type GetSetLoadBalancerListenerSslCertificateVersionEnum string

const (
    GetSetLoadBalancerListenerSslCertificateVersionEnumTwoThousandAndTwelve0601 GetSetLoadBalancerListenerSslCertificateVersionEnum = "2012-06-01"
)


type GetSetLoadBalancerListenerSslCertificateQueryParams struct {
    Action GetSetLoadBalancerListenerSslCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    LoadBalancerPort int64 `queryParam:"style=form,explode=true,name=LoadBalancerPort"`
    SslCertificateID string `queryParam:"style=form,explode=true,name=SSLCertificateId"`
    Version GetSetLoadBalancerListenerSslCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetLoadBalancerListenerSslCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetLoadBalancerListenerSslCertificateRequest struct {
    QueryParams GetSetLoadBalancerListenerSslCertificateQueryParams 
    Headers GetSetLoadBalancerListenerSslCertificateHeaders 
    
}

type GetSetLoadBalancerListenerSslCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

