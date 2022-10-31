package operations




type PostDescribeTargetGroupsActionEnum string

const (
    PostDescribeTargetGroupsActionEnumDescribeTargetGroups PostDescribeTargetGroupsActionEnum = "DescribeTargetGroups"
)



type PostDescribeTargetGroupsVersionEnum string

const (
    PostDescribeTargetGroupsVersionEnumTwoThousandAndFifteen1201 PostDescribeTargetGroupsVersionEnum = "2015-12-01"
)


type PostDescribeTargetGroupsQueryParams struct {
    Action PostDescribeTargetGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    Version PostDescribeTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTargetGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTargetGroupsRequest struct {
    QueryParams PostDescribeTargetGroupsQueryParams 
    Headers PostDescribeTargetGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTargetGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

