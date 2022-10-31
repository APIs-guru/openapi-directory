package operations




type PostDescribeKeyPairsActionEnum string

const (
    PostDescribeKeyPairsActionEnumDescribeKeyPairs PostDescribeKeyPairsActionEnum = "DescribeKeyPairs"
)



type PostDescribeKeyPairsVersionEnum string

const (
    PostDescribeKeyPairsVersionEnumTwoThousandAndSixteen1115 PostDescribeKeyPairsVersionEnum = "2016-11-15"
)


type PostDescribeKeyPairsQueryParams struct {
    Action PostDescribeKeyPairsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeKeyPairsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeKeyPairsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeKeyPairsRequest struct {
    QueryParams PostDescribeKeyPairsQueryParams 
    Headers PostDescribeKeyPairsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeKeyPairsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

