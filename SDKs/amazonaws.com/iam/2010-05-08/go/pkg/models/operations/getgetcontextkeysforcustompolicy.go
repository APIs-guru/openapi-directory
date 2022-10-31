package operations




type GetGetContextKeysForCustomPolicyActionEnum string

const (
    GetGetContextKeysForCustomPolicyActionEnumGetContextKeysForCustomPolicy GetGetContextKeysForCustomPolicyActionEnum = "GetContextKeysForCustomPolicy"
)



type GetGetContextKeysForCustomPolicyVersionEnum string

const (
    GetGetContextKeysForCustomPolicyVersionEnumTwoThousandAndTen0508 GetGetContextKeysForCustomPolicyVersionEnum = "2010-05-08"
)


type GetGetContextKeysForCustomPolicyQueryParams struct {
    Action GetGetContextKeysForCustomPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    PolicyInputList []string `queryParam:"style=form,explode=true,name=PolicyInputList"`
    Version GetGetContextKeysForCustomPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetContextKeysForCustomPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetContextKeysForCustomPolicyRequest struct {
    QueryParams GetGetContextKeysForCustomPolicyQueryParams 
    Headers GetGetContextKeysForCustomPolicyHeaders 
    
}

type GetGetContextKeysForCustomPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

