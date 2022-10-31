package operations




type PostCreateLbCookieStickinessPolicyActionEnum string

const (
    PostCreateLbCookieStickinessPolicyActionEnumCreateLbCookieStickinessPolicy PostCreateLbCookieStickinessPolicyActionEnum = "CreateLBCookieStickinessPolicy"
)



type PostCreateLbCookieStickinessPolicyVersionEnum string

const (
    PostCreateLbCookieStickinessPolicyVersionEnumTwoThousandAndTwelve0601 PostCreateLbCookieStickinessPolicyVersionEnum = "2012-06-01"
)


type PostCreateLbCookieStickinessPolicyQueryParams struct {
    Action PostCreateLbCookieStickinessPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateLbCookieStickinessPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateLbCookieStickinessPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateLbCookieStickinessPolicyRequest struct {
    QueryParams PostCreateLbCookieStickinessPolicyQueryParams 
    Headers PostCreateLbCookieStickinessPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateLbCookieStickinessPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

