package operations




type PostDisableImageDeprecationActionEnum string

const (
    PostDisableImageDeprecationActionEnumDisableImageDeprecation PostDisableImageDeprecationActionEnum = "DisableImageDeprecation"
)



type PostDisableImageDeprecationVersionEnum string

const (
    PostDisableImageDeprecationVersionEnumTwoThousandAndSixteen1115 PostDisableImageDeprecationVersionEnum = "2016-11-15"
)


type PostDisableImageDeprecationQueryParams struct {
    Action PostDisableImageDeprecationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisableImageDeprecationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisableImageDeprecationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisableImageDeprecationRequest struct {
    QueryParams PostDisableImageDeprecationQueryParams 
    Headers PostDisableImageDeprecationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisableImageDeprecationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

