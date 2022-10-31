package operations




type PostDeleteListenerActionEnum string

const (
    PostDeleteListenerActionEnumDeleteListener PostDeleteListenerActionEnum = "DeleteListener"
)



type PostDeleteListenerVersionEnum string

const (
    PostDeleteListenerVersionEnumTwoThousandAndFifteen1201 PostDeleteListenerVersionEnum = "2015-12-01"
)


type PostDeleteListenerQueryParams struct {
    Action PostDeleteListenerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteListenerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteListenerRequest struct {
    QueryParams PostDeleteListenerQueryParams 
    Headers PostDeleteListenerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteListenerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

