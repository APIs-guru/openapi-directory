package operations




type GetPutGroupPolicyActionEnum string

const (
    GetPutGroupPolicyActionEnumPutGroupPolicy GetPutGroupPolicyActionEnum = "PutGroupPolicy"
)



type GetPutGroupPolicyVersionEnum string

const (
    GetPutGroupPolicyVersionEnumTwoThousandAndTen0508 GetPutGroupPolicyVersionEnum = "2010-05-08"
)


type GetPutGroupPolicyQueryParams struct {
    Action GetPutGroupPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    GroupName string `queryParam:"style=form,explode=true,name=GroupName"`
    PolicyDocument string `queryParam:"style=form,explode=true,name=PolicyDocument"`
    PolicyName string `queryParam:"style=form,explode=true,name=PolicyName"`
    Version GetPutGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetPutGroupPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPutGroupPolicyRequest struct {
    QueryParams GetPutGroupPolicyQueryParams 
    Headers GetPutGroupPolicyHeaders 
    
}

type GetPutGroupPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

