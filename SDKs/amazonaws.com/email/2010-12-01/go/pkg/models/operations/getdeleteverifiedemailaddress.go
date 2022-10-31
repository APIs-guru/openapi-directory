package operations




type GetDeleteVerifiedEmailAddressActionEnum string

const (
    GetDeleteVerifiedEmailAddressActionEnumDeleteVerifiedEmailAddress GetDeleteVerifiedEmailAddressActionEnum = "DeleteVerifiedEmailAddress"
)



type GetDeleteVerifiedEmailAddressVersionEnum string

const (
    GetDeleteVerifiedEmailAddressVersionEnumTwoThousandAndTen1201 GetDeleteVerifiedEmailAddressVersionEnum = "2010-12-01"
)


type GetDeleteVerifiedEmailAddressQueryParams struct {
    Action GetDeleteVerifiedEmailAddressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EmailAddress string `queryParam:"style=form,explode=true,name=EmailAddress"`
    Version GetDeleteVerifiedEmailAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteVerifiedEmailAddressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteVerifiedEmailAddressRequest struct {
    QueryParams GetDeleteVerifiedEmailAddressQueryParams 
    Headers GetDeleteVerifiedEmailAddressHeaders 
    
}

type GetDeleteVerifiedEmailAddressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

