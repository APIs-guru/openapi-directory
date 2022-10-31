package operations




type GetGetRolePolicyActionEnum string

const (
    GetGetRolePolicyActionEnumGetRolePolicy GetGetRolePolicyActionEnum = "GetRolePolicy"
)



type GetGetRolePolicyVersionEnum string

const (
    GetGetRolePolicyVersionEnumTwoThousandAndTen0508 GetGetRolePolicyVersionEnum = "2010-05-08"
)


type GetGetRolePolicyQueryParams struct {
    Action GetGetRolePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyName string `queryParam:"style=form,explode=true,name=PolicyName"`
    RoleName string `queryParam:"style=form,explode=true,name=RoleName"`
    Version GetGetRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetRolePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetRolePolicyRequest struct {
    QueryParams GetGetRolePolicyQueryParams 
    Headers GetGetRolePolicyHeaders 
    
}

type GetGetRolePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

