package operations




type GetAddClientIDToOpenIDConnectProviderActionEnum string

const (
    GetAddClientIDToOpenIDConnectProviderActionEnumAddClientIDToOpenIDConnectProvider GetAddClientIDToOpenIDConnectProviderActionEnum = "AddClientIDToOpenIDConnectProvider"
)



type GetAddClientIDToOpenIDConnectProviderVersionEnum string

const (
    GetAddClientIDToOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 GetAddClientIDToOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type GetAddClientIDToOpenIDConnectProviderQueryParams struct {
    Action GetAddClientIDToOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClientID string `queryParam:"style=form,explode=true,name=ClientID"`
    OpenIDConnectProviderArn string `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
    Version GetAddClientIDToOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAddClientIDToOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAddClientIDToOpenIDConnectProviderRequest struct {
    QueryParams GetAddClientIDToOpenIDConnectProviderQueryParams 
    Headers GetAddClientIDToOpenIDConnectProviderHeaders 
    
}

type GetAddClientIDToOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

