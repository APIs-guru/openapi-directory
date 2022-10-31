package operations




type GetUntagOpenIDConnectProviderActionEnum string

const (
    GetUntagOpenIDConnectProviderActionEnumUntagOpenIDConnectProvider GetUntagOpenIDConnectProviderActionEnum = "UntagOpenIDConnectProvider"
)



type GetUntagOpenIDConnectProviderVersionEnum string

const (
    GetUntagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 GetUntagOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type GetUntagOpenIDConnectProviderQueryParams struct {
    Action GetUntagOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    OpenIDConnectProviderArn string `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    Version GetUntagOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUntagOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUntagOpenIDConnectProviderRequest struct {
    QueryParams GetUntagOpenIDConnectProviderQueryParams 
    Headers GetUntagOpenIDConnectProviderHeaders 
    
}

type GetUntagOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

