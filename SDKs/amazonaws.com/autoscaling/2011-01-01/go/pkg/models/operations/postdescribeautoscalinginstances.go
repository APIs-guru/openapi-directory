package operations




type PostDescribeAutoScalingInstancesActionEnum string

const (
    PostDescribeAutoScalingInstancesActionEnumDescribeAutoScalingInstances PostDescribeAutoScalingInstancesActionEnum = "DescribeAutoScalingInstances"
)



type PostDescribeAutoScalingInstancesVersionEnum string

const (
    PostDescribeAutoScalingInstancesVersionEnumTwoThousandAndEleven0101 PostDescribeAutoScalingInstancesVersionEnum = "2011-01-01"
)


type PostDescribeAutoScalingInstancesQueryParams struct {
    Action PostDescribeAutoScalingInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeAutoScalingInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeAutoScalingInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeAutoScalingInstancesRequest struct {
    QueryParams PostDescribeAutoScalingInstancesQueryParams 
    Headers PostDescribeAutoScalingInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeAutoScalingInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

