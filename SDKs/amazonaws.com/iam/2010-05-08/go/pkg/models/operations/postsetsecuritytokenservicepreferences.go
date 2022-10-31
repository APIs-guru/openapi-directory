package operations




type PostSetSecurityTokenServicePreferencesActionEnum string

const (
    PostSetSecurityTokenServicePreferencesActionEnumSetSecurityTokenServicePreferences PostSetSecurityTokenServicePreferencesActionEnum = "SetSecurityTokenServicePreferences"
)



type PostSetSecurityTokenServicePreferencesVersionEnum string

const (
    PostSetSecurityTokenServicePreferencesVersionEnumTwoThousandAndTen0508 PostSetSecurityTokenServicePreferencesVersionEnum = "2010-05-08"
)


type PostSetSecurityTokenServicePreferencesQueryParams struct {
    Action PostSetSecurityTokenServicePreferencesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSetSecurityTokenServicePreferencesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSetSecurityTokenServicePreferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSetSecurityTokenServicePreferencesRequest struct {
    QueryParams PostSetSecurityTokenServicePreferencesQueryParams 
    Headers PostSetSecurityTokenServicePreferencesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSetSecurityTokenServicePreferencesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

