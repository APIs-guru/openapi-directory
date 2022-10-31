package operations




type PostPutUserPolicyActionEnum string

const (
    PostPutUserPolicyActionEnumPutUserPolicy PostPutUserPolicyActionEnum = "PutUserPolicy"
)



type PostPutUserPolicyVersionEnum string

const (
    PostPutUserPolicyVersionEnumTwoThousandAndTen0508 PostPutUserPolicyVersionEnum = "2010-05-08"
)


type PostPutUserPolicyQueryParams struct {
    Action PostPutUserPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutUserPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutUserPolicyRequest struct {
    QueryParams PostPutUserPolicyQueryParams 
    Headers PostPutUserPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutUserPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

