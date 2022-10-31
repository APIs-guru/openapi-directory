package operations




type GetListSamlProvidersActionEnum string

const (
    GetListSamlProvidersActionEnumListSamlProviders GetListSamlProvidersActionEnum = "ListSAMLProviders"
)



type GetListSamlProvidersVersionEnum string

const (
    GetListSamlProvidersVersionEnumTwoThousandAndTen0508 GetListSamlProvidersVersionEnum = "2010-05-08"
)


type GetListSamlProvidersQueryParams struct {
    Action GetListSamlProvidersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetListSamlProvidersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListSamlProvidersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListSamlProvidersRequest struct {
    QueryParams GetListSamlProvidersQueryParams 
    Headers GetListSamlProvidersHeaders 
    
}

type GetListSamlProvidersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

