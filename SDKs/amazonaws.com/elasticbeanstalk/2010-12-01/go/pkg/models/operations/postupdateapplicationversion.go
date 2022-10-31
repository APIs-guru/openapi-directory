package operations




type PostUpdateApplicationVersionActionEnum string

const (
    PostUpdateApplicationVersionActionEnumUpdateApplicationVersion PostUpdateApplicationVersionActionEnum = "UpdateApplicationVersion"
)



type PostUpdateApplicationVersionVersionEnum string

const (
    PostUpdateApplicationVersionVersionEnumTwoThousandAndTen1201 PostUpdateApplicationVersionVersionEnum = "2010-12-01"
)


type PostUpdateApplicationVersionQueryParams struct {
    Action PostUpdateApplicationVersionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateApplicationVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateApplicationVersionRequest struct {
    QueryParams PostUpdateApplicationVersionQueryParams 
    Headers PostUpdateApplicationVersionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateApplicationVersionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

