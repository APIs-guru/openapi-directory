package operations




type GetListVerifiedEmailAddressesActionEnum string

const (
    GetListVerifiedEmailAddressesActionEnumListVerifiedEmailAddresses GetListVerifiedEmailAddressesActionEnum = "ListVerifiedEmailAddresses"
)



type GetListVerifiedEmailAddressesVersionEnum string

const (
    GetListVerifiedEmailAddressesVersionEnumTwoThousandAndTen1201 GetListVerifiedEmailAddressesVersionEnum = "2010-12-01"
)


type GetListVerifiedEmailAddressesQueryParams struct {
    Action GetListVerifiedEmailAddressesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetListVerifiedEmailAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListVerifiedEmailAddressesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListVerifiedEmailAddressesRequest struct {
    QueryParams GetListVerifiedEmailAddressesQueryParams 
    Headers GetListVerifiedEmailAddressesHeaders 
    
}

type GetListVerifiedEmailAddressesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

