package operations




type PostSimulatePrincipalPolicyActionEnum string

const (
    PostSimulatePrincipalPolicyActionEnumSimulatePrincipalPolicy PostSimulatePrincipalPolicyActionEnum = "SimulatePrincipalPolicy"
)



type PostSimulatePrincipalPolicyVersionEnum string

const (
    PostSimulatePrincipalPolicyVersionEnumTwoThousandAndTen0508 PostSimulatePrincipalPolicyVersionEnum = "2010-05-08"
)


type PostSimulatePrincipalPolicyQueryParams struct {
    Action PostSimulatePrincipalPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostSimulatePrincipalPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSimulatePrincipalPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSimulatePrincipalPolicyRequest struct {
    QueryParams PostSimulatePrincipalPolicyQueryParams 
    Headers PostSimulatePrincipalPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSimulatePrincipalPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

