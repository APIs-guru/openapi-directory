package operations




type GetCreateAppCookieStickinessPolicyActionEnum string

const (
    GetCreateAppCookieStickinessPolicyActionEnumCreateAppCookieStickinessPolicy GetCreateAppCookieStickinessPolicyActionEnum = "CreateAppCookieStickinessPolicy"
)



type GetCreateAppCookieStickinessPolicyVersionEnum string

const (
    GetCreateAppCookieStickinessPolicyVersionEnumTwoThousandAndTwelve0601 GetCreateAppCookieStickinessPolicyVersionEnum = "2012-06-01"
)


type GetCreateAppCookieStickinessPolicyQueryParams struct {
    Action GetCreateAppCookieStickinessPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CookieName string `queryParam:"style=form,explode=true,name=CookieName"`
    LoadBalancerName string `queryParam:"style=form,explode=true,name=LoadBalancerName"`
    PolicyName string `queryParam:"style=form,explode=true,name=PolicyName"`
    Version GetCreateAppCookieStickinessPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateAppCookieStickinessPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateAppCookieStickinessPolicyRequest struct {
    QueryParams GetCreateAppCookieStickinessPolicyQueryParams 
    Headers GetCreateAppCookieStickinessPolicyHeaders 
    
}

type GetCreateAppCookieStickinessPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

