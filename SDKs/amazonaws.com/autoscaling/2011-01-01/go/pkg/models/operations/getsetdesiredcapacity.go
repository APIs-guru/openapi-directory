package operations




type GetSetDesiredCapacityActionEnum string

const (
    GetSetDesiredCapacityActionEnumSetDesiredCapacity GetSetDesiredCapacityActionEnum = "SetDesiredCapacity"
)



type GetSetDesiredCapacityVersionEnum string

const (
    GetSetDesiredCapacityVersionEnumTwoThousandAndEleven0101 GetSetDesiredCapacityVersionEnum = "2011-01-01"
)


type GetSetDesiredCapacityQueryParams struct {
    Action GetSetDesiredCapacityActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    DesiredCapacity int64 `queryParam:"style=form,explode=true,name=DesiredCapacity"`
    HonorCooldown *bool `queryParam:"style=form,explode=true,name=HonorCooldown"`
    Version GetSetDesiredCapacityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetDesiredCapacityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetDesiredCapacityRequest struct {
    QueryParams GetSetDesiredCapacityQueryParams 
    Headers GetSetDesiredCapacityHeaders 
    
}

type GetSetDesiredCapacityResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

