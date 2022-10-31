package operations




type PostDeleteApplicationActionEnum string

const (
    PostDeleteApplicationActionEnumDeleteApplication PostDeleteApplicationActionEnum = "DeleteApplication"
)



type PostDeleteApplicationVersionEnum string

const (
    PostDeleteApplicationVersionEnumTwoThousandAndTen1201 PostDeleteApplicationVersionEnum = "2010-12-01"
)


type PostDeleteApplicationQueryParams struct {
    Action PostDeleteApplicationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteApplicationRequest struct {
    QueryParams PostDeleteApplicationQueryParams 
    Headers PostDeleteApplicationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteApplicationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

