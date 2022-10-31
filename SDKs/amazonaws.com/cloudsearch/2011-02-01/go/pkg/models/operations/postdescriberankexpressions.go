package operations




type PostDescribeRankExpressionsActionEnum string

const (
    PostDescribeRankExpressionsActionEnumDescribeRankExpressions PostDescribeRankExpressionsActionEnum = "DescribeRankExpressions"
)



type PostDescribeRankExpressionsVersionEnum string

const (
    PostDescribeRankExpressionsVersionEnumTwoThousandAndEleven0201 PostDescribeRankExpressionsVersionEnum = "2011-02-01"
)


type PostDescribeRankExpressionsQueryParams struct {
    Action PostDescribeRankExpressionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeRankExpressionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeRankExpressionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeRankExpressionsRequest struct {
    QueryParams PostDescribeRankExpressionsQueryParams 
    Headers PostDescribeRankExpressionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeRankExpressionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

