package operations




type GetDeleteAutoScalingGroupActionEnum string

const (
    GetDeleteAutoScalingGroupActionEnumDeleteAutoScalingGroup GetDeleteAutoScalingGroupActionEnum = "DeleteAutoScalingGroup"
)



type GetDeleteAutoScalingGroupVersionEnum string

const (
    GetDeleteAutoScalingGroupVersionEnumTwoThousandAndEleven0101 GetDeleteAutoScalingGroupVersionEnum = "2011-01-01"
)


type GetDeleteAutoScalingGroupQueryParams struct {
    Action GetDeleteAutoScalingGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    ForceDelete *bool `queryParam:"style=form,explode=true,name=ForceDelete"`
    Version GetDeleteAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteAutoScalingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteAutoScalingGroupRequest struct {
    QueryParams GetDeleteAutoScalingGroupQueryParams 
    Headers GetDeleteAutoScalingGroupHeaders 
    
}

type GetDeleteAutoScalingGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

