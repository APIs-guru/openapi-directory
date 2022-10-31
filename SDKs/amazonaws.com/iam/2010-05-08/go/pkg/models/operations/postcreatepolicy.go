package operations




type PostCreatePolicyActionEnum string

const (
    PostCreatePolicyActionEnumCreatePolicy PostCreatePolicyActionEnum = "CreatePolicy"
)



type PostCreatePolicyVersionEnum string

const (
    PostCreatePolicyVersionEnumTwoThousandAndTen0508 PostCreatePolicyVersionEnum = "2010-05-08"
)


type PostCreatePolicyQueryParams struct {
    Action PostCreatePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreatePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreatePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreatePolicyRequest struct {
    QueryParams PostCreatePolicyQueryParams 
    Headers PostCreatePolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreatePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

