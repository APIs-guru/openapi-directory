package operations




type PostDeleteNotificationConfigurationActionEnum string

const (
    PostDeleteNotificationConfigurationActionEnumDeleteNotificationConfiguration PostDeleteNotificationConfigurationActionEnum = "DeleteNotificationConfiguration"
)



type PostDeleteNotificationConfigurationVersionEnum string

const (
    PostDeleteNotificationConfigurationVersionEnumTwoThousandAndEleven0101 PostDeleteNotificationConfigurationVersionEnum = "2011-01-01"
)


type PostDeleteNotificationConfigurationQueryParams struct {
    Action PostDeleteNotificationConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteNotificationConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteNotificationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteNotificationConfigurationRequest struct {
    QueryParams PostDeleteNotificationConfigurationQueryParams 
    Headers PostDeleteNotificationConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteNotificationConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

