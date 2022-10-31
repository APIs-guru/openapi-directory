package operations




type GetDeleteServiceSpecificCredentialActionEnum string

const (
    GetDeleteServiceSpecificCredentialActionEnumDeleteServiceSpecificCredential GetDeleteServiceSpecificCredentialActionEnum = "DeleteServiceSpecificCredential"
)



type GetDeleteServiceSpecificCredentialVersionEnum string

const (
    GetDeleteServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 GetDeleteServiceSpecificCredentialVersionEnum = "2010-05-08"
)


type GetDeleteServiceSpecificCredentialQueryParams struct {
    Action GetDeleteServiceSpecificCredentialActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ServiceSpecificCredentialID string `queryParam:"style=form,explode=true,name=ServiceSpecificCredentialId"`
    UserName *string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetDeleteServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteServiceSpecificCredentialHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteServiceSpecificCredentialRequest struct {
    QueryParams GetDeleteServiceSpecificCredentialQueryParams 
    Headers GetDeleteServiceSpecificCredentialHeaders 
    
}

type GetDeleteServiceSpecificCredentialResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

