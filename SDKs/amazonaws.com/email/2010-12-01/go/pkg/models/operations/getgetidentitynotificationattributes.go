package operations




type GetGetIdentityNotificationAttributesActionEnum string

const (
    GetGetIdentityNotificationAttributesActionEnumGetIdentityNotificationAttributes GetGetIdentityNotificationAttributesActionEnum = "GetIdentityNotificationAttributes"
)



type GetGetIdentityNotificationAttributesVersionEnum string

const (
    GetGetIdentityNotificationAttributesVersionEnumTwoThousandAndTen1201 GetGetIdentityNotificationAttributesVersionEnum = "2010-12-01"
)


type GetGetIdentityNotificationAttributesQueryParams struct {
    Action GetGetIdentityNotificationAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Identities []string `queryParam:"style=form,explode=true,name=Identities"`
    Version GetGetIdentityNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetIdentityNotificationAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetIdentityNotificationAttributesRequest struct {
    QueryParams GetGetIdentityNotificationAttributesQueryParams 
    Headers GetGetIdentityNotificationAttributesHeaders 
    
}

type GetGetIdentityNotificationAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

