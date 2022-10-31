package operations




type PostResetAddressAttributeActionEnum string

const (
    PostResetAddressAttributeActionEnumResetAddressAttribute PostResetAddressAttributeActionEnum = "ResetAddressAttribute"
)



type PostResetAddressAttributeVersionEnum string

const (
    PostResetAddressAttributeVersionEnumTwoThousandAndSixteen1115 PostResetAddressAttributeVersionEnum = "2016-11-15"
)


type PostResetAddressAttributeQueryParams struct {
    Action PostResetAddressAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostResetAddressAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostResetAddressAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostResetAddressAttributeRequest struct {
    QueryParams PostResetAddressAttributeQueryParams 
    Headers PostResetAddressAttributeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostResetAddressAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

