package operations




type GetCreateConfigurationSetTrackingOptionsActionEnum string

const (
    GetCreateConfigurationSetTrackingOptionsActionEnumCreateConfigurationSetTrackingOptions GetCreateConfigurationSetTrackingOptionsActionEnum = "CreateConfigurationSetTrackingOptions"
)


type GetCreateConfigurationSetTrackingOptionsTrackingOptions struct {
    CustomRedirectDomain *string `queryParam:"name=CustomRedirectDomain"`
    
}


type GetCreateConfigurationSetTrackingOptionsVersionEnum string

const (
    GetCreateConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 GetCreateConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)


type GetCreateConfigurationSetTrackingOptionsQueryParams struct {
    Action GetCreateConfigurationSetTrackingOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConfigurationSetName string `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
    TrackingOptions GetCreateConfigurationSetTrackingOptionsTrackingOptions `queryParam:"style=form,explode=true,name=TrackingOptions"`
    Version GetCreateConfigurationSetTrackingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateConfigurationSetTrackingOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateConfigurationSetTrackingOptionsRequest struct {
    QueryParams GetCreateConfigurationSetTrackingOptionsQueryParams 
    Headers GetCreateConfigurationSetTrackingOptionsHeaders 
    
}

type GetCreateConfigurationSetTrackingOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

