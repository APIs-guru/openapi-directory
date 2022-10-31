package operations




type PostRegisterTargetsActionEnum string

const (
    PostRegisterTargetsActionEnumRegisterTargets PostRegisterTargetsActionEnum = "RegisterTargets"
)



type PostRegisterTargetsVersionEnum string

const (
    PostRegisterTargetsVersionEnumTwoThousandAndFifteen1201 PostRegisterTargetsVersionEnum = "2015-12-01"
)


type PostRegisterTargetsQueryParams struct {
    Action PostRegisterTargetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRegisterTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRegisterTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRegisterTargetsRequest struct {
    QueryParams PostRegisterTargetsQueryParams 
    Headers PostRegisterTargetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRegisterTargetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

