package operations




type PostDeleteVerifiedEmailAddressActionEnum string

const (
    PostDeleteVerifiedEmailAddressActionEnumDeleteVerifiedEmailAddress PostDeleteVerifiedEmailAddressActionEnum = "DeleteVerifiedEmailAddress"
)



type PostDeleteVerifiedEmailAddressVersionEnum string

const (
    PostDeleteVerifiedEmailAddressVersionEnumTwoThousandAndTen1201 PostDeleteVerifiedEmailAddressVersionEnum = "2010-12-01"
)


type PostDeleteVerifiedEmailAddressQueryParams struct {
    Action PostDeleteVerifiedEmailAddressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteVerifiedEmailAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteVerifiedEmailAddressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteVerifiedEmailAddressRequest struct {
    QueryParams PostDeleteVerifiedEmailAddressQueryParams 
    Headers PostDeleteVerifiedEmailAddressHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteVerifiedEmailAddressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

