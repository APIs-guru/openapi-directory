package operations




type PostPutIdentityPolicyActionEnum string

const (
    PostPutIdentityPolicyActionEnumPutIdentityPolicy PostPutIdentityPolicyActionEnum = "PutIdentityPolicy"
)



type PostPutIdentityPolicyVersionEnum string

const (
    PostPutIdentityPolicyVersionEnumTwoThousandAndTen1201 PostPutIdentityPolicyVersionEnum = "2010-12-01"
)


type PostPutIdentityPolicyQueryParams struct {
    Action PostPutIdentityPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutIdentityPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutIdentityPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutIdentityPolicyRequest struct {
    QueryParams PostPutIdentityPolicyQueryParams 
    Headers PostPutIdentityPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutIdentityPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

