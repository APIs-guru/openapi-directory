package operations




type GetDescribeSpotFleetRequestsActionEnum string

const (
    GetDescribeSpotFleetRequestsActionEnumDescribeSpotFleetRequests GetDescribeSpotFleetRequestsActionEnum = "DescribeSpotFleetRequests"
)



type GetDescribeSpotFleetRequestsVersionEnum string

const (
    GetDescribeSpotFleetRequestsVersionEnumTwoThousandAndSixteen1115 GetDescribeSpotFleetRequestsVersionEnum = "2016-11-15"
)


type GetDescribeSpotFleetRequestsQueryParams struct {
    Action GetDescribeSpotFleetRequestsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    SpotFleetRequestID []string `queryParam:"style=form,explode=true,name=SpotFleetRequestId"`
    Version GetDescribeSpotFleetRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeSpotFleetRequestsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeSpotFleetRequestsRequest struct {
    QueryParams GetDescribeSpotFleetRequestsQueryParams 
    Headers GetDescribeSpotFleetRequestsHeaders 
    
}

type GetDescribeSpotFleetRequestsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

