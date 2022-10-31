package operations




type PostTerminateInstanceInAutoScalingGroupActionEnum string

const (
    PostTerminateInstanceInAutoScalingGroupActionEnumTerminateInstanceInAutoScalingGroup PostTerminateInstanceInAutoScalingGroupActionEnum = "TerminateInstanceInAutoScalingGroup"
)



type PostTerminateInstanceInAutoScalingGroupVersionEnum string

const (
    PostTerminateInstanceInAutoScalingGroupVersionEnumTwoThousandAndEleven0101 PostTerminateInstanceInAutoScalingGroupVersionEnum = "2011-01-01"
)


type PostTerminateInstanceInAutoScalingGroupQueryParams struct {
    Action PostTerminateInstanceInAutoScalingGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTerminateInstanceInAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTerminateInstanceInAutoScalingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTerminateInstanceInAutoScalingGroupRequest struct {
    QueryParams PostTerminateInstanceInAutoScalingGroupQueryParams 
    Headers PostTerminateInstanceInAutoScalingGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTerminateInstanceInAutoScalingGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

