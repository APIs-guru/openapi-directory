package operations




type GetDescribeWarmPoolActionEnum string

const (
    GetDescribeWarmPoolActionEnumDescribeWarmPool GetDescribeWarmPoolActionEnum = "DescribeWarmPool"
)



type GetDescribeWarmPoolVersionEnum string

const (
    GetDescribeWarmPoolVersionEnumTwoThousandAndEleven0101 GetDescribeWarmPoolVersionEnum = "2011-01-01"
)


type GetDescribeWarmPoolQueryParams struct {
    Action GetDescribeWarmPoolActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeWarmPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeWarmPoolRequest struct {
    QueryParams GetDescribeWarmPoolQueryParams 
    Headers GetDescribeWarmPoolHeaders 
    
}

type GetDescribeWarmPoolResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

