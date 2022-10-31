package operations




type PostDescribeInstancesHealthActionEnum string

const (
    PostDescribeInstancesHealthActionEnumDescribeInstancesHealth PostDescribeInstancesHealthActionEnum = "DescribeInstancesHealth"
)



type PostDescribeInstancesHealthVersionEnum string

const (
    PostDescribeInstancesHealthVersionEnumTwoThousandAndTen1201 PostDescribeInstancesHealthVersionEnum = "2010-12-01"
)


type PostDescribeInstancesHealthQueryParams struct {
    Action PostDescribeInstancesHealthActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeInstancesHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstancesHealthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstancesHealthRequest struct {
    QueryParams PostDescribeInstancesHealthQueryParams 
    Headers PostDescribeInstancesHealthHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstancesHealthResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

