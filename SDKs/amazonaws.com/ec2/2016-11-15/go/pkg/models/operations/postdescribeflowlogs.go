package operations




type PostDescribeFlowLogsActionEnum string

const (
    PostDescribeFlowLogsActionEnumDescribeFlowLogs PostDescribeFlowLogsActionEnum = "DescribeFlowLogs"
)



type PostDescribeFlowLogsVersionEnum string

const (
    PostDescribeFlowLogsVersionEnumTwoThousandAndSixteen1115 PostDescribeFlowLogsVersionEnum = "2016-11-15"
)


type PostDescribeFlowLogsQueryParams struct {
    Action PostDescribeFlowLogsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeFlowLogsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeFlowLogsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeFlowLogsRequest struct {
    QueryParams PostDescribeFlowLogsQueryParams 
    Headers PostDescribeFlowLogsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeFlowLogsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

