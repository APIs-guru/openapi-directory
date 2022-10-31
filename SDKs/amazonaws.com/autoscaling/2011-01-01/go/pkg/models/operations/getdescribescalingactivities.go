package operations




type GetDescribeScalingActivitiesActionEnum string

const (
    GetDescribeScalingActivitiesActionEnumDescribeScalingActivities GetDescribeScalingActivitiesActionEnum = "DescribeScalingActivities"
)



type GetDescribeScalingActivitiesVersionEnum string

const (
    GetDescribeScalingActivitiesVersionEnumTwoThousandAndEleven0101 GetDescribeScalingActivitiesVersionEnum = "2011-01-01"
)


type GetDescribeScalingActivitiesQueryParams struct {
    Action GetDescribeScalingActivitiesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ActivityIds []string `queryParam:"style=form,explode=true,name=ActivityIds"`
    AutoScalingGroupName *string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    IncludeDeletedGroups *bool `queryParam:"style=form,explode=true,name=IncludeDeletedGroups"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeScalingActivitiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeScalingActivitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeScalingActivitiesRequest struct {
    QueryParams GetDescribeScalingActivitiesQueryParams 
    Headers GetDescribeScalingActivitiesHeaders 
    
}

type GetDescribeScalingActivitiesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

