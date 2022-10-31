package operations




type PostUpdateAccessKeyActionEnum string

const (
    PostUpdateAccessKeyActionEnumUpdateAccessKey PostUpdateAccessKeyActionEnum = "UpdateAccessKey"
)



type PostUpdateAccessKeyVersionEnum string

const (
    PostUpdateAccessKeyVersionEnumTwoThousandAndTen0508 PostUpdateAccessKeyVersionEnum = "2010-05-08"
)


type PostUpdateAccessKeyQueryParams struct {
    Action PostUpdateAccessKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateAccessKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateAccessKeyRequest struct {
    QueryParams PostUpdateAccessKeyQueryParams 
    Headers PostUpdateAccessKeyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateAccessKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

