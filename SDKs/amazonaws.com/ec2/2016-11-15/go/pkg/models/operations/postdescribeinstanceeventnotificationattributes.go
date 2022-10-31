package operations




type PostDescribeInstanceEventNotificationAttributesActionEnum string

const (
    PostDescribeInstanceEventNotificationAttributesActionEnumDescribeInstanceEventNotificationAttributes PostDescribeInstanceEventNotificationAttributesActionEnum = "DescribeInstanceEventNotificationAttributes"
)



type PostDescribeInstanceEventNotificationAttributesVersionEnum string

const (
    PostDescribeInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)


type PostDescribeInstanceEventNotificationAttributesQueryParams struct {
    Action PostDescribeInstanceEventNotificationAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeInstanceEventNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstanceEventNotificationAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstanceEventNotificationAttributesRequest struct {
    QueryParams PostDescribeInstanceEventNotificationAttributesQueryParams 
    Headers PostDescribeInstanceEventNotificationAttributesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstanceEventNotificationAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

