package operations




type GetDeleteIdentityPolicyActionEnum string

const (
    GetDeleteIdentityPolicyActionEnumDeleteIdentityPolicy GetDeleteIdentityPolicyActionEnum = "DeleteIdentityPolicy"
)



type GetDeleteIdentityPolicyVersionEnum string

const (
    GetDeleteIdentityPolicyVersionEnumTwoThousandAndTen1201 GetDeleteIdentityPolicyVersionEnum = "2010-12-01"
)


type GetDeleteIdentityPolicyQueryParams struct {
    Action GetDeleteIdentityPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Identity string `queryParam:"style=form,explode=true,name=Identity"`
    PolicyName string `queryParam:"style=form,explode=true,name=PolicyName"`
    Version GetDeleteIdentityPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteIdentityPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteIdentityPolicyRequest struct {
    QueryParams GetDeleteIdentityPolicyQueryParams 
    Headers GetDeleteIdentityPolicyHeaders 
    
}

type GetDeleteIdentityPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

