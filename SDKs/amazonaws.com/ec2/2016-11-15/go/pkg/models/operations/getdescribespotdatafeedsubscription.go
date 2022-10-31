package operations




type GetDescribeSpotDatafeedSubscriptionActionEnum string

const (
    GetDescribeSpotDatafeedSubscriptionActionEnumDescribeSpotDatafeedSubscription GetDescribeSpotDatafeedSubscriptionActionEnum = "DescribeSpotDatafeedSubscription"
)



type GetDescribeSpotDatafeedSubscriptionVersionEnum string

const (
    GetDescribeSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 GetDescribeSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)


type GetDescribeSpotDatafeedSubscriptionQueryParams struct {
    Action GetDescribeSpotDatafeedSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDescribeSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeSpotDatafeedSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeSpotDatafeedSubscriptionRequest struct {
    QueryParams GetDescribeSpotDatafeedSubscriptionQueryParams 
    Headers GetDescribeSpotDatafeedSubscriptionHeaders 
    
}

type GetDescribeSpotDatafeedSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

