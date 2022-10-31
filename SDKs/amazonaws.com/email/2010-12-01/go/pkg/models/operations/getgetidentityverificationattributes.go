package operations




type GetGetIdentityVerificationAttributesActionEnum string

const (
    GetGetIdentityVerificationAttributesActionEnumGetIdentityVerificationAttributes GetGetIdentityVerificationAttributesActionEnum = "GetIdentityVerificationAttributes"
)



type GetGetIdentityVerificationAttributesVersionEnum string

const (
    GetGetIdentityVerificationAttributesVersionEnumTwoThousandAndTen1201 GetGetIdentityVerificationAttributesVersionEnum = "2010-12-01"
)


type GetGetIdentityVerificationAttributesQueryParams struct {
    Action GetGetIdentityVerificationAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Identities []string `queryParam:"style=form,explode=true,name=Identities"`
    Version GetGetIdentityVerificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetIdentityVerificationAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetIdentityVerificationAttributesRequest struct {
    QueryParams GetGetIdentityVerificationAttributesQueryParams 
    Headers GetGetIdentityVerificationAttributesHeaders 
    
}

type GetGetIdentityVerificationAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

