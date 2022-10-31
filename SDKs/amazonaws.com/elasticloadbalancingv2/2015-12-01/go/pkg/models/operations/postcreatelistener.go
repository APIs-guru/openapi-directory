package operations




type PostCreateListenerActionEnum string

const (
    PostCreateListenerActionEnumCreateListener PostCreateListenerActionEnum = "CreateListener"
)



type PostCreateListenerVersionEnum string

const (
    PostCreateListenerVersionEnumTwoThousandAndFifteen1201 PostCreateListenerVersionEnum = "2015-12-01"
)


type PostCreateListenerQueryParams struct {
    Action PostCreateListenerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateListenerRequest struct {
    QueryParams PostCreateListenerQueryParams 
    Headers PostCreateListenerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateListenerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

