package operations




type PostDescribeNetworkInsightsPathsActionEnum string

const (
    PostDescribeNetworkInsightsPathsActionEnumDescribeNetworkInsightsPaths PostDescribeNetworkInsightsPathsActionEnum = "DescribeNetworkInsightsPaths"
)



type PostDescribeNetworkInsightsPathsVersionEnum string

const (
    PostDescribeNetworkInsightsPathsVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInsightsPathsVersionEnum = "2016-11-15"
)


type PostDescribeNetworkInsightsPathsQueryParams struct {
    Action PostDescribeNetworkInsightsPathsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeNetworkInsightsPathsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeNetworkInsightsPathsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeNetworkInsightsPathsRequest struct {
    QueryParams PostDescribeNetworkInsightsPathsQueryParams 
    Headers PostDescribeNetworkInsightsPathsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeNetworkInsightsPathsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

