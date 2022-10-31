package operations




type PostDescribeSpotFleetInstancesActionEnum string

const (
    PostDescribeSpotFleetInstancesActionEnumDescribeSpotFleetInstances PostDescribeSpotFleetInstancesActionEnum = "DescribeSpotFleetInstances"
)



type PostDescribeSpotFleetInstancesVersionEnum string

const (
    PostDescribeSpotFleetInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotFleetInstancesVersionEnum = "2016-11-15"
)


type PostDescribeSpotFleetInstancesQueryParams struct {
    Action PostDescribeSpotFleetInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeSpotFleetInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSpotFleetInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSpotFleetInstancesRequest struct {
    QueryParams PostDescribeSpotFleetInstancesQueryParams 
    Headers PostDescribeSpotFleetInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSpotFleetInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

