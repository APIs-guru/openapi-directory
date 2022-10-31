package operations




type PostPutNotificationConfigurationActionEnum string

const (
    PostPutNotificationConfigurationActionEnumPutNotificationConfiguration PostPutNotificationConfigurationActionEnum = "PutNotificationConfiguration"
)



type PostPutNotificationConfigurationVersionEnum string

const (
    PostPutNotificationConfigurationVersionEnumTwoThousandAndEleven0101 PostPutNotificationConfigurationVersionEnum = "2011-01-01"
)


type PostPutNotificationConfigurationQueryParams struct {
    Action PostPutNotificationConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutNotificationConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutNotificationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutNotificationConfigurationRequest struct {
    QueryParams PostPutNotificationConfigurationQueryParams 
    Headers PostPutNotificationConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutNotificationConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

