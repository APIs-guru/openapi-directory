package operations




type PostDescribeInstancesActionEnum string

const (
    PostDescribeInstancesActionEnumDescribeInstances PostDescribeInstancesActionEnum = "DescribeInstances"
)



type PostDescribeInstancesVersionEnum string

const (
    PostDescribeInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeInstancesVersionEnum = "2016-11-15"
)


type PostDescribeInstancesQueryParams struct {
    Action PostDescribeInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstancesRequest struct {
    QueryParams PostDescribeInstancesQueryParams 
    Headers PostDescribeInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

