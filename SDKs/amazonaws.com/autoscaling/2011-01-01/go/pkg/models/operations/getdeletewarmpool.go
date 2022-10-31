package operations




type GetDeleteWarmPoolActionEnum string

const (
    GetDeleteWarmPoolActionEnumDeleteWarmPool GetDeleteWarmPoolActionEnum = "DeleteWarmPool"
)



type GetDeleteWarmPoolVersionEnum string

const (
    GetDeleteWarmPoolVersionEnumTwoThousandAndEleven0101 GetDeleteWarmPoolVersionEnum = "2011-01-01"
)


type GetDeleteWarmPoolQueryParams struct {
    Action GetDeleteWarmPoolActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    ForceDelete *bool `queryParam:"style=form,explode=true,name=ForceDelete"`
    Version GetDeleteWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteWarmPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteWarmPoolRequest struct {
    QueryParams GetDeleteWarmPoolQueryParams 
    Headers GetDeleteWarmPoolHeaders 
    
}

type GetDeleteWarmPoolResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

