package operations




type PostDescribeRegionsActionEnum string

const (
    PostDescribeRegionsActionEnumDescribeRegions PostDescribeRegionsActionEnum = "DescribeRegions"
)



type PostDescribeRegionsVersionEnum string

const (
    PostDescribeRegionsVersionEnumTwoThousandAndSixteen1115 PostDescribeRegionsVersionEnum = "2016-11-15"
)


type PostDescribeRegionsQueryParams struct {
    Action PostDescribeRegionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeRegionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeRegionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeRegionsRequest struct {
    QueryParams PostDescribeRegionsQueryParams 
    Headers PostDescribeRegionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeRegionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

