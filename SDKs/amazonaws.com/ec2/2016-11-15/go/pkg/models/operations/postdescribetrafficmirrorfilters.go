package operations




type PostDescribeTrafficMirrorFiltersActionEnum string

const (
    PostDescribeTrafficMirrorFiltersActionEnumDescribeTrafficMirrorFilters PostDescribeTrafficMirrorFiltersActionEnum = "DescribeTrafficMirrorFilters"
)



type PostDescribeTrafficMirrorFiltersVersionEnum string

const (
    PostDescribeTrafficMirrorFiltersVersionEnumTwoThousandAndSixteen1115 PostDescribeTrafficMirrorFiltersVersionEnum = "2016-11-15"
)


type PostDescribeTrafficMirrorFiltersQueryParams struct {
    Action PostDescribeTrafficMirrorFiltersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeTrafficMirrorFiltersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTrafficMirrorFiltersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTrafficMirrorFiltersRequest struct {
    QueryParams PostDescribeTrafficMirrorFiltersQueryParams 
    Headers PostDescribeTrafficMirrorFiltersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTrafficMirrorFiltersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

