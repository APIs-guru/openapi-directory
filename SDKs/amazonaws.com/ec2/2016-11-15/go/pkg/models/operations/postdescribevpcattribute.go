package operations




type PostDescribeVpcAttributeActionEnum string

const (
    PostDescribeVpcAttributeActionEnumDescribeVpcAttribute PostDescribeVpcAttributeActionEnum = "DescribeVpcAttribute"
)



type PostDescribeVpcAttributeVersionEnum string

const (
    PostDescribeVpcAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcAttributeVersionEnum = "2016-11-15"
)


type PostDescribeVpcAttributeQueryParams struct {
    Action PostDescribeVpcAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeVpcAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeVpcAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeVpcAttributeRequest struct {
    QueryParams PostDescribeVpcAttributeQueryParams 
    Headers PostDescribeVpcAttributeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeVpcAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

