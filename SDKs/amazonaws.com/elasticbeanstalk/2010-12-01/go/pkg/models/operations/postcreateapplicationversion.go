package operations




type PostCreateApplicationVersionActionEnum string

const (
    PostCreateApplicationVersionActionEnumCreateApplicationVersion PostCreateApplicationVersionActionEnum = "CreateApplicationVersion"
)



type PostCreateApplicationVersionVersionEnum string

const (
    PostCreateApplicationVersionVersionEnumTwoThousandAndTen1201 PostCreateApplicationVersionVersionEnum = "2010-12-01"
)


type PostCreateApplicationVersionQueryParams struct {
    Action PostCreateApplicationVersionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateApplicationVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateApplicationVersionRequest struct {
    QueryParams PostCreateApplicationVersionQueryParams 
    Headers PostCreateApplicationVersionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateApplicationVersionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

