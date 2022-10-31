package operations




type GetGetIdentityMailFromDomainAttributesActionEnum string

const (
    GetGetIdentityMailFromDomainAttributesActionEnumGetIdentityMailFromDomainAttributes GetGetIdentityMailFromDomainAttributesActionEnum = "GetIdentityMailFromDomainAttributes"
)



type GetGetIdentityMailFromDomainAttributesVersionEnum string

const (
    GetGetIdentityMailFromDomainAttributesVersionEnumTwoThousandAndTen1201 GetGetIdentityMailFromDomainAttributesVersionEnum = "2010-12-01"
)


type GetGetIdentityMailFromDomainAttributesQueryParams struct {
    Action GetGetIdentityMailFromDomainAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Identities []string `queryParam:"style=form,explode=true,name=Identities"`
    Version GetGetIdentityMailFromDomainAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetIdentityMailFromDomainAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetIdentityMailFromDomainAttributesRequest struct {
    QueryParams GetGetIdentityMailFromDomainAttributesQueryParams 
    Headers GetGetIdentityMailFromDomainAttributesHeaders 
    
}

type GetGetIdentityMailFromDomainAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

