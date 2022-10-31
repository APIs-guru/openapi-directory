package operations




type PostDescribeStopwordOptionsActionEnum string

const (
    PostDescribeStopwordOptionsActionEnumDescribeStopwordOptions PostDescribeStopwordOptionsActionEnum = "DescribeStopwordOptions"
)



type PostDescribeStopwordOptionsVersionEnum string

const (
    PostDescribeStopwordOptionsVersionEnumTwoThousandAndEleven0201 PostDescribeStopwordOptionsVersionEnum = "2011-02-01"
)


type PostDescribeStopwordOptionsQueryParams struct {
    Action PostDescribeStopwordOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeStopwordOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeStopwordOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeStopwordOptionsRequest struct {
    QueryParams PostDescribeStopwordOptionsQueryParams 
    Headers PostDescribeStopwordOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeStopwordOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

