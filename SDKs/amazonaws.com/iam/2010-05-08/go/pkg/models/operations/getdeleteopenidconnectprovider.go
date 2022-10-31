package operations




type GetDeleteOpenIDConnectProviderActionEnum string

const (
    GetDeleteOpenIDConnectProviderActionEnumDeleteOpenIDConnectProvider GetDeleteOpenIDConnectProviderActionEnum = "DeleteOpenIDConnectProvider"
)



type GetDeleteOpenIDConnectProviderVersionEnum string

const (
    GetDeleteOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 GetDeleteOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type GetDeleteOpenIDConnectProviderQueryParams struct {
    Action GetDeleteOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    OpenIDConnectProviderArn string `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
    Version GetDeleteOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteOpenIDConnectProviderRequest struct {
    QueryParams GetDeleteOpenIDConnectProviderQueryParams 
    Headers GetDeleteOpenIDConnectProviderHeaders 
    
}

type GetDeleteOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

