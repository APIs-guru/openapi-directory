package operations




type PostDescribeFleetInstancesActionEnum string

const (
    PostDescribeFleetInstancesActionEnumDescribeFleetInstances PostDescribeFleetInstancesActionEnum = "DescribeFleetInstances"
)



type PostDescribeFleetInstancesVersionEnum string

const (
    PostDescribeFleetInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeFleetInstancesVersionEnum = "2016-11-15"
)


type PostDescribeFleetInstancesQueryParams struct {
    Action PostDescribeFleetInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeFleetInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeFleetInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeFleetInstancesRequest struct {
    QueryParams PostDescribeFleetInstancesQueryParams 
    Headers PostDescribeFleetInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeFleetInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

