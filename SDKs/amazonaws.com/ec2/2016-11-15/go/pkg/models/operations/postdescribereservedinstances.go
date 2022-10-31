package operations




type PostDescribeReservedInstancesActionEnum string

const (
    PostDescribeReservedInstancesActionEnumDescribeReservedInstances PostDescribeReservedInstancesActionEnum = "DescribeReservedInstances"
)



type PostDescribeReservedInstancesVersionEnum string

const (
    PostDescribeReservedInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeReservedInstancesVersionEnum = "2016-11-15"
)


type PostDescribeReservedInstancesQueryParams struct {
    Action PostDescribeReservedInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeReservedInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReservedInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReservedInstancesRequest struct {
    QueryParams PostDescribeReservedInstancesQueryParams 
    Headers PostDescribeReservedInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReservedInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

