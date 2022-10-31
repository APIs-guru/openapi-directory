package operations




type PostDescribeEnvironmentHealthActionEnum string

const (
    PostDescribeEnvironmentHealthActionEnumDescribeEnvironmentHealth PostDescribeEnvironmentHealthActionEnum = "DescribeEnvironmentHealth"
)



type PostDescribeEnvironmentHealthVersionEnum string

const (
    PostDescribeEnvironmentHealthVersionEnumTwoThousandAndTen1201 PostDescribeEnvironmentHealthVersionEnum = "2010-12-01"
)


type PostDescribeEnvironmentHealthQueryParams struct {
    Action PostDescribeEnvironmentHealthActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeEnvironmentHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEnvironmentHealthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEnvironmentHealthRequest struct {
    QueryParams PostDescribeEnvironmentHealthQueryParams 
    Headers PostDescribeEnvironmentHealthHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEnvironmentHealthResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

