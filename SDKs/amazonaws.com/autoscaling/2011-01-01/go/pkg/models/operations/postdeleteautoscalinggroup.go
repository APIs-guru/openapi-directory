package operations




type PostDeleteAutoScalingGroupActionEnum string

const (
    PostDeleteAutoScalingGroupActionEnumDeleteAutoScalingGroup PostDeleteAutoScalingGroupActionEnum = "DeleteAutoScalingGroup"
)



type PostDeleteAutoScalingGroupVersionEnum string

const (
    PostDeleteAutoScalingGroupVersionEnumTwoThousandAndEleven0101 PostDeleteAutoScalingGroupVersionEnum = "2011-01-01"
)


type PostDeleteAutoScalingGroupQueryParams struct {
    Action PostDeleteAutoScalingGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteAutoScalingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteAutoScalingGroupRequest struct {
    QueryParams PostDeleteAutoScalingGroupQueryParams 
    Headers PostDeleteAutoScalingGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteAutoScalingGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

