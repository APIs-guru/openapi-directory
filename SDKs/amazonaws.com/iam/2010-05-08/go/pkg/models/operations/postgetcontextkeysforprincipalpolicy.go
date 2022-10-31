package operations




type PostGetContextKeysForPrincipalPolicyActionEnum string

const (
    PostGetContextKeysForPrincipalPolicyActionEnumGetContextKeysForPrincipalPolicy PostGetContextKeysForPrincipalPolicyActionEnum = "GetContextKeysForPrincipalPolicy"
)



type PostGetContextKeysForPrincipalPolicyVersionEnum string

const (
    PostGetContextKeysForPrincipalPolicyVersionEnumTwoThousandAndTen0508 PostGetContextKeysForPrincipalPolicyVersionEnum = "2010-05-08"
)


type PostGetContextKeysForPrincipalPolicyQueryParams struct {
    Action PostGetContextKeysForPrincipalPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetContextKeysForPrincipalPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetContextKeysForPrincipalPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetContextKeysForPrincipalPolicyRequest struct {
    QueryParams PostGetContextKeysForPrincipalPolicyQueryParams 
    Headers PostGetContextKeysForPrincipalPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetContextKeysForPrincipalPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

