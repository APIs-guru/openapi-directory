package operations




type GetEnterStandbyActionEnum string

const (
    GetEnterStandbyActionEnumEnterStandby GetEnterStandbyActionEnum = "EnterStandby"
)



type GetEnterStandbyVersionEnum string

const (
    GetEnterStandbyVersionEnumTwoThousandAndEleven0101 GetEnterStandbyVersionEnum = "2011-01-01"
)


type GetEnterStandbyQueryParams struct {
    Action GetEnterStandbyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    InstanceIds []string `queryParam:"style=form,explode=true,name=InstanceIds"`
    ShouldDecrementDesiredCapacity bool `queryParam:"style=form,explode=true,name=ShouldDecrementDesiredCapacity"`
    Version GetEnterStandbyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetEnterStandbyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnterStandbyRequest struct {
    QueryParams GetEnterStandbyQueryParams 
    Headers GetEnterStandbyHeaders 
    
}

type GetEnterStandbyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

