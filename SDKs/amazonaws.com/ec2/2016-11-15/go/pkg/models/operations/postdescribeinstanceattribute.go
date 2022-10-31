package operations




type PostDescribeInstanceAttributeActionEnum string

const (
    PostDescribeInstanceAttributeActionEnumDescribeInstanceAttribute PostDescribeInstanceAttributeActionEnum = "DescribeInstanceAttribute"
)



type PostDescribeInstanceAttributeVersionEnum string

const (
    PostDescribeInstanceAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceAttributeVersionEnum = "2016-11-15"
)


type PostDescribeInstanceAttributeQueryParams struct {
    Action PostDescribeInstanceAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeInstanceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstanceAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstanceAttributeRequest struct {
    QueryParams PostDescribeInstanceAttributeQueryParams 
    Headers PostDescribeInstanceAttributeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstanceAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

