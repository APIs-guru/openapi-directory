package operations




type PostDescribeInstanceHealthActionEnum string

const (
    PostDescribeInstanceHealthActionEnumDescribeInstanceHealth PostDescribeInstanceHealthActionEnum = "DescribeInstanceHealth"
)



type PostDescribeInstanceHealthVersionEnum string

const (
    PostDescribeInstanceHealthVersionEnumTwoThousandAndTwelve0601 PostDescribeInstanceHealthVersionEnum = "2012-06-01"
)


type PostDescribeInstanceHealthQueryParams struct {
    Action PostDescribeInstanceHealthActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeInstanceHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstanceHealthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstanceHealthRequest struct {
    QueryParams PostDescribeInstanceHealthQueryParams 
    Headers PostDescribeInstanceHealthHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstanceHealthResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

