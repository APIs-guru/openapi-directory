package operations




type PostDescribeReplaceRootVolumeTasksActionEnum string

const (
    PostDescribeReplaceRootVolumeTasksActionEnumDescribeReplaceRootVolumeTasks PostDescribeReplaceRootVolumeTasksActionEnum = "DescribeReplaceRootVolumeTasks"
)



type PostDescribeReplaceRootVolumeTasksVersionEnum string

const (
    PostDescribeReplaceRootVolumeTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeReplaceRootVolumeTasksVersionEnum = "2016-11-15"
)


type PostDescribeReplaceRootVolumeTasksQueryParams struct {
    Action PostDescribeReplaceRootVolumeTasksActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeReplaceRootVolumeTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReplaceRootVolumeTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReplaceRootVolumeTasksRequest struct {
    QueryParams PostDescribeReplaceRootVolumeTasksQueryParams 
    Headers PostDescribeReplaceRootVolumeTasksHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReplaceRootVolumeTasksResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

