package operations




type GetDeleteNotificationConfigurationActionEnum string

const (
    GetDeleteNotificationConfigurationActionEnumDeleteNotificationConfiguration GetDeleteNotificationConfigurationActionEnum = "DeleteNotificationConfiguration"
)



type GetDeleteNotificationConfigurationVersionEnum string

const (
    GetDeleteNotificationConfigurationVersionEnumTwoThousandAndEleven0101 GetDeleteNotificationConfigurationVersionEnum = "2011-01-01"
)


type GetDeleteNotificationConfigurationQueryParams struct {
    Action GetDeleteNotificationConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    TopicArn string `queryParam:"style=form,explode=true,name=TopicARN"`
    Version GetDeleteNotificationConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteNotificationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteNotificationConfigurationRequest struct {
    QueryParams GetDeleteNotificationConfigurationQueryParams 
    Headers GetDeleteNotificationConfigurationHeaders 
    
}

type GetDeleteNotificationConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

