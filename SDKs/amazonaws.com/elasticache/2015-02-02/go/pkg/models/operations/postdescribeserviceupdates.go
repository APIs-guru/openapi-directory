package operations




type PostDescribeServiceUpdatesActionEnum string

const (
    PostDescribeServiceUpdatesActionEnumDescribeServiceUpdates PostDescribeServiceUpdatesActionEnum = "DescribeServiceUpdates"
)



type PostDescribeServiceUpdatesVersionEnum string

const (
    PostDescribeServiceUpdatesVersionEnumTwoThousandAndFifteen0202 PostDescribeServiceUpdatesVersionEnum = "2015-02-02"
)


type PostDescribeServiceUpdatesQueryParams struct {
    Action PostDescribeServiceUpdatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeServiceUpdatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeServiceUpdatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeServiceUpdatesRequest struct {
    QueryParams PostDescribeServiceUpdatesQueryParams 
    Headers PostDescribeServiceUpdatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeServiceUpdatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

