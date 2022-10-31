package operations




type PostUpdateAccountPasswordPolicyActionEnum string

const (
    PostUpdateAccountPasswordPolicyActionEnumUpdateAccountPasswordPolicy PostUpdateAccountPasswordPolicyActionEnum = "UpdateAccountPasswordPolicy"
)



type PostUpdateAccountPasswordPolicyVersionEnum string

const (
    PostUpdateAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 PostUpdateAccountPasswordPolicyVersionEnum = "2010-05-08"
)


type PostUpdateAccountPasswordPolicyQueryParams struct {
    Action PostUpdateAccountPasswordPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateAccountPasswordPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateAccountPasswordPolicyRequest struct {
    QueryParams PostUpdateAccountPasswordPolicyQueryParams 
    Headers PostUpdateAccountPasswordPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateAccountPasswordPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

