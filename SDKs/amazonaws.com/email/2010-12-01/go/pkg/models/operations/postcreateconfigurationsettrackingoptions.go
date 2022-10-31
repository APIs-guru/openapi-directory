package operations




type PostCreateConfigurationSetTrackingOptionsActionEnum string

const (
    PostCreateConfigurationSetTrackingOptionsActionEnumCreateConfigurationSetTrackingOptions PostCreateConfigurationSetTrackingOptionsActionEnum = "CreateConfigurationSetTrackingOptions"
)



type PostCreateConfigurationSetTrackingOptionsVersionEnum string

const (
    PostCreateConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 PostCreateConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)


type PostCreateConfigurationSetTrackingOptionsQueryParams struct {
    Action PostCreateConfigurationSetTrackingOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateConfigurationSetTrackingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateConfigurationSetTrackingOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateConfigurationSetTrackingOptionsRequest struct {
    QueryParams PostCreateConfigurationSetTrackingOptionsQueryParams 
    Headers PostCreateConfigurationSetTrackingOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateConfigurationSetTrackingOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

