package operations




type GetSetSecurityTokenServicePreferencesActionEnum string

const (
    GetSetSecurityTokenServicePreferencesActionEnumSetSecurityTokenServicePreferences GetSetSecurityTokenServicePreferencesActionEnum = "SetSecurityTokenServicePreferences"
)



type GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum string

const (
    GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnumV1Token GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = "v1Token"
GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnumV2Token GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = "v2Token"
)



type GetSetSecurityTokenServicePreferencesVersionEnum string

const (
    GetSetSecurityTokenServicePreferencesVersionEnumTwoThousandAndTen0508 GetSetSecurityTokenServicePreferencesVersionEnum = "2010-05-08"
)


type GetSetSecurityTokenServicePreferencesQueryParams struct {
    Action GetSetSecurityTokenServicePreferencesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    GlobalEndpointTokenVersion GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum `queryParam:"style=form,explode=true,name=GlobalEndpointTokenVersion"`
    Version GetSetSecurityTokenServicePreferencesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetSecurityTokenServicePreferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetSecurityTokenServicePreferencesRequest struct {
    QueryParams GetSetSecurityTokenServicePreferencesQueryParams 
    Headers GetSetSecurityTokenServicePreferencesHeaders 
    
}

type GetSetSecurityTokenServicePreferencesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

