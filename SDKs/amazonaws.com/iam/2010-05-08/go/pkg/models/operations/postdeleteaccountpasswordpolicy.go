package operations




type PostDeleteAccountPasswordPolicyActionEnum string

const (
    PostDeleteAccountPasswordPolicyActionEnumDeleteAccountPasswordPolicy PostDeleteAccountPasswordPolicyActionEnum = "DeleteAccountPasswordPolicy"
)



type PostDeleteAccountPasswordPolicyVersionEnum string

const (
    PostDeleteAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 PostDeleteAccountPasswordPolicyVersionEnum = "2010-05-08"
)


type PostDeleteAccountPasswordPolicyQueryParams struct {
    Action PostDeleteAccountPasswordPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteAccountPasswordPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteAccountPasswordPolicyRequest struct {
    QueryParams PostDeleteAccountPasswordPolicyQueryParams 
    Headers PostDeleteAccountPasswordPolicyHeaders 
    
}

type PostDeleteAccountPasswordPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

