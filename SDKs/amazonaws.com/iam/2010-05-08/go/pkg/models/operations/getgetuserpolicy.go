package operations




type GetGetUserPolicyActionEnum string

const (
    GetGetUserPolicyActionEnumGetUserPolicy GetGetUserPolicyActionEnum = "GetUserPolicy"
)



type GetGetUserPolicyVersionEnum string

const (
    GetGetUserPolicyVersionEnumTwoThousandAndTen0508 GetGetUserPolicyVersionEnum = "2010-05-08"
)


type GetGetUserPolicyQueryParams struct {
    Action GetGetUserPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyName string `queryParam:"style=form,explode=true,name=PolicyName"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetGetUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetUserPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetUserPolicyRequest struct {
    QueryParams GetGetUserPolicyQueryParams 
    Headers GetGetUserPolicyHeaders 
    
}

type GetGetUserPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

