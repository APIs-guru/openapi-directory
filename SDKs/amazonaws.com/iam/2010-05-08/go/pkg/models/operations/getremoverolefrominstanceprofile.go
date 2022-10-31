package operations




type GetRemoveRoleFromInstanceProfileActionEnum string

const (
    GetRemoveRoleFromInstanceProfileActionEnumRemoveRoleFromInstanceProfile GetRemoveRoleFromInstanceProfileActionEnum = "RemoveRoleFromInstanceProfile"
)



type GetRemoveRoleFromInstanceProfileVersionEnum string

const (
    GetRemoveRoleFromInstanceProfileVersionEnumTwoThousandAndTen0508 GetRemoveRoleFromInstanceProfileVersionEnum = "2010-05-08"
)


type GetRemoveRoleFromInstanceProfileQueryParams struct {
    Action GetRemoveRoleFromInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    InstanceProfileName string `queryParam:"style=form,explode=true,name=InstanceProfileName"`
    RoleName string `queryParam:"style=form,explode=true,name=RoleName"`
    Version GetRemoveRoleFromInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRemoveRoleFromInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRemoveRoleFromInstanceProfileRequest struct {
    QueryParams GetRemoveRoleFromInstanceProfileQueryParams 
    Headers GetRemoveRoleFromInstanceProfileHeaders 
    
}

type GetRemoveRoleFromInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

