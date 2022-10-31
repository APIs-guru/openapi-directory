package operations




type PostUpdateServiceSpecificCredentialActionEnum string

const (
    PostUpdateServiceSpecificCredentialActionEnumUpdateServiceSpecificCredential PostUpdateServiceSpecificCredentialActionEnum = "UpdateServiceSpecificCredential"
)



type PostUpdateServiceSpecificCredentialVersionEnum string

const (
    PostUpdateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 PostUpdateServiceSpecificCredentialVersionEnum = "2010-05-08"
)


type PostUpdateServiceSpecificCredentialQueryParams struct {
    Action PostUpdateServiceSpecificCredentialActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateServiceSpecificCredentialHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateServiceSpecificCredentialRequest struct {
    QueryParams PostUpdateServiceSpecificCredentialQueryParams 
    Headers PostUpdateServiceSpecificCredentialHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateServiceSpecificCredentialResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

