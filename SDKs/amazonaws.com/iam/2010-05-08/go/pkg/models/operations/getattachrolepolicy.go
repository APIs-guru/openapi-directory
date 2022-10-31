package operations




type GetAttachRolePolicyActionEnum string

const (
    GetAttachRolePolicyActionEnumAttachRolePolicy GetAttachRolePolicyActionEnum = "AttachRolePolicy"
)



type GetAttachRolePolicyVersionEnum string

const (
    GetAttachRolePolicyVersionEnumTwoThousandAndTen0508 GetAttachRolePolicyVersionEnum = "2010-05-08"
)


type GetAttachRolePolicyQueryParams struct {
    Action GetAttachRolePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyArn string `queryParam:"style=form,explode=true,name=PolicyArn"`
    RoleName string `queryParam:"style=form,explode=true,name=RoleName"`
    Version GetAttachRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAttachRolePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAttachRolePolicyRequest struct {
    QueryParams GetAttachRolePolicyQueryParams 
    Headers GetAttachRolePolicyHeaders 
    
}

type GetAttachRolePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

