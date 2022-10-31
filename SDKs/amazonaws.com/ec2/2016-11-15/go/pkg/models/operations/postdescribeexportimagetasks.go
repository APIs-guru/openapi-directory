package operations




type PostDescribeExportImageTasksActionEnum string

const (
    PostDescribeExportImageTasksActionEnumDescribeExportImageTasks PostDescribeExportImageTasksActionEnum = "DescribeExportImageTasks"
)



type PostDescribeExportImageTasksVersionEnum string

const (
    PostDescribeExportImageTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeExportImageTasksVersionEnum = "2016-11-15"
)


type PostDescribeExportImageTasksQueryParams struct {
    Action PostDescribeExportImageTasksActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeExportImageTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeExportImageTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeExportImageTasksRequest struct {
    QueryParams PostDescribeExportImageTasksQueryParams 
    Headers PostDescribeExportImageTasksHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeExportImageTasksResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

