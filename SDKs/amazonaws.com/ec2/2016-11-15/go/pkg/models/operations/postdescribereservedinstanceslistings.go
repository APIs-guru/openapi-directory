package operations




type PostDescribeReservedInstancesListingsActionEnum string

const (
    PostDescribeReservedInstancesListingsActionEnumDescribeReservedInstancesListings PostDescribeReservedInstancesListingsActionEnum = "DescribeReservedInstancesListings"
)



type PostDescribeReservedInstancesListingsVersionEnum string

const (
    PostDescribeReservedInstancesListingsVersionEnumTwoThousandAndSixteen1115 PostDescribeReservedInstancesListingsVersionEnum = "2016-11-15"
)


type PostDescribeReservedInstancesListingsQueryParams struct {
    Action PostDescribeReservedInstancesListingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeReservedInstancesListingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReservedInstancesListingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReservedInstancesListingsRequest struct {
    QueryParams PostDescribeReservedInstancesListingsQueryParams 
    Headers PostDescribeReservedInstancesListingsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReservedInstancesListingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

