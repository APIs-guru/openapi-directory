package operations




type GetDescribeTargetGroupsActionEnum string

const (
    GetDescribeTargetGroupsActionEnumDescribeTargetGroups GetDescribeTargetGroupsActionEnum = "DescribeTargetGroups"
)



type GetDescribeTargetGroupsVersionEnum string

const (
    GetDescribeTargetGroupsVersionEnumTwoThousandAndFifteen1201 GetDescribeTargetGroupsVersionEnum = "2015-12-01"
)


type GetDescribeTargetGroupsQueryParams struct {
    Action GetDescribeTargetGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    LoadBalancerArn *string `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    Names []string `queryParam:"style=form,explode=true,name=Names"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    TargetGroupArns []string `queryParam:"style=form,explode=true,name=TargetGroupArns"`
    Version GetDescribeTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeTargetGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeTargetGroupsRequest struct {
    QueryParams GetDescribeTargetGroupsQueryParams 
    Headers GetDescribeTargetGroupsHeaders 
    
}

type GetDescribeTargetGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

