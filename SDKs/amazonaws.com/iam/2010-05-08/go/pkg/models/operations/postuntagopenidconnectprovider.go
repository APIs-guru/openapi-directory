package operations




type PostUntagOpenIDConnectProviderActionEnum string

const (
    PostUntagOpenIDConnectProviderActionEnumUntagOpenIDConnectProvider PostUntagOpenIDConnectProviderActionEnum = "UntagOpenIDConnectProvider"
)



type PostUntagOpenIDConnectProviderVersionEnum string

const (
    PostUntagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostUntagOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type PostUntagOpenIDConnectProviderQueryParams struct {
    Action PostUntagOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUntagOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUntagOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUntagOpenIDConnectProviderRequest struct {
    QueryParams PostUntagOpenIDConnectProviderQueryParams 
    Headers PostUntagOpenIDConnectProviderHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUntagOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

