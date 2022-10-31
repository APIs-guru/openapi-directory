package operations




type PostDeregisterTargetsActionEnum string

const (
    PostDeregisterTargetsActionEnumDeregisterTargets PostDeregisterTargetsActionEnum = "DeregisterTargets"
)



type PostDeregisterTargetsVersionEnum string

const (
    PostDeregisterTargetsVersionEnumTwoThousandAndFifteen1201 PostDeregisterTargetsVersionEnum = "2015-12-01"
)


type PostDeregisterTargetsQueryParams struct {
    Action PostDeregisterTargetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeregisterTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeregisterTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeregisterTargetsRequest struct {
    QueryParams PostDeregisterTargetsQueryParams 
    Headers PostDeregisterTargetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeregisterTargetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

