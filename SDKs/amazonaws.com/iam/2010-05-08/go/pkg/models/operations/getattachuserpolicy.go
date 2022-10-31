package operations




type GetAttachUserPolicyActionEnum string

const (
    GetAttachUserPolicyActionEnumAttachUserPolicy GetAttachUserPolicyActionEnum = "AttachUserPolicy"
)



type GetAttachUserPolicyVersionEnum string

const (
    GetAttachUserPolicyVersionEnumTwoThousandAndTen0508 GetAttachUserPolicyVersionEnum = "2010-05-08"
)


type GetAttachUserPolicyQueryParams struct {
    Action GetAttachUserPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyArn string `queryParam:"style=form,explode=true,name=PolicyArn"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetAttachUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAttachUserPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAttachUserPolicyRequest struct {
    QueryParams GetAttachUserPolicyQueryParams 
    Headers GetAttachUserPolicyHeaders 
    
}

type GetAttachUserPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

