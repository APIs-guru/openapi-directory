package operations




type GetGetOpenIDConnectProviderActionEnum string

const (
    GetGetOpenIDConnectProviderActionEnumGetOpenIDConnectProvider GetGetOpenIDConnectProviderActionEnum = "GetOpenIDConnectProvider"
)



type GetGetOpenIDConnectProviderVersionEnum string

const (
    GetGetOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 GetGetOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type GetGetOpenIDConnectProviderQueryParams struct {
    Action GetGetOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    OpenIDConnectProviderArn string `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
    Version GetGetOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetOpenIDConnectProviderRequest struct {
    QueryParams GetGetOpenIDConnectProviderQueryParams 
    Headers GetGetOpenIDConnectProviderHeaders 
    
}

type GetGetOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

