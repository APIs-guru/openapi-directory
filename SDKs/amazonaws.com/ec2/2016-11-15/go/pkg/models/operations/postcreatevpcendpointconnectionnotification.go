package operations




type PostCreateVpcEndpointConnectionNotificationActionEnum string

const (
    PostCreateVpcEndpointConnectionNotificationActionEnumCreateVpcEndpointConnectionNotification PostCreateVpcEndpointConnectionNotificationActionEnum = "CreateVpcEndpointConnectionNotification"
)



type PostCreateVpcEndpointConnectionNotificationVersionEnum string

const (
    PostCreateVpcEndpointConnectionNotificationVersionEnumTwoThousandAndSixteen1115 PostCreateVpcEndpointConnectionNotificationVersionEnum = "2016-11-15"
)


type PostCreateVpcEndpointConnectionNotificationQueryParams struct {
    Action PostCreateVpcEndpointConnectionNotificationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateVpcEndpointConnectionNotificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateVpcEndpointConnectionNotificationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateVpcEndpointConnectionNotificationRequest struct {
    QueryParams PostCreateVpcEndpointConnectionNotificationQueryParams 
    Headers PostCreateVpcEndpointConnectionNotificationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateVpcEndpointConnectionNotificationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

