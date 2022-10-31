package operations




type PostDescribeIdentityIDFormatActionEnum string

const (
    PostDescribeIdentityIDFormatActionEnumDescribeIdentityIDFormat PostDescribeIdentityIDFormatActionEnum = "DescribeIdentityIdFormat"
)



type PostDescribeIdentityIDFormatVersionEnum string

const (
    PostDescribeIdentityIDFormatVersionEnumTwoThousandAndSixteen1115 PostDescribeIdentityIDFormatVersionEnum = "2016-11-15"
)


type PostDescribeIdentityIDFormatQueryParams struct {
    Action PostDescribeIdentityIDFormatActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeIdentityIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeIdentityIDFormatHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeIdentityIDFormatRequest struct {
    QueryParams PostDescribeIdentityIDFormatQueryParams 
    Headers PostDescribeIdentityIDFormatHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeIdentityIDFormatResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

