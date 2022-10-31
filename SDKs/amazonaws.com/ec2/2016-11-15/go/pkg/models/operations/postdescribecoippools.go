package operations




type PostDescribeCoipPoolsActionEnum string

const (
    PostDescribeCoipPoolsActionEnumDescribeCoipPools PostDescribeCoipPoolsActionEnum = "DescribeCoipPools"
)



type PostDescribeCoipPoolsVersionEnum string

const (
    PostDescribeCoipPoolsVersionEnumTwoThousandAndSixteen1115 PostDescribeCoipPoolsVersionEnum = "2016-11-15"
)


type PostDescribeCoipPoolsQueryParams struct {
    Action PostDescribeCoipPoolsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeCoipPoolsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeCoipPoolsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeCoipPoolsRequest struct {
    QueryParams PostDescribeCoipPoolsQueryParams 
    Headers PostDescribeCoipPoolsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeCoipPoolsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

