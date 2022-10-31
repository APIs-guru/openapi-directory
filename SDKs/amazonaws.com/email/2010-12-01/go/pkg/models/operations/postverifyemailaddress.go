package operations




type PostVerifyEmailAddressActionEnum string

const (
    PostVerifyEmailAddressActionEnumVerifyEmailAddress PostVerifyEmailAddressActionEnum = "VerifyEmailAddress"
)



type PostVerifyEmailAddressVersionEnum string

const (
    PostVerifyEmailAddressVersionEnumTwoThousandAndTen1201 PostVerifyEmailAddressVersionEnum = "2010-12-01"
)


type PostVerifyEmailAddressQueryParams struct {
    Action PostVerifyEmailAddressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostVerifyEmailAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostVerifyEmailAddressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostVerifyEmailAddressRequest struct {
    QueryParams PostVerifyEmailAddressQueryParams 
    Headers PostVerifyEmailAddressHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostVerifyEmailAddressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

