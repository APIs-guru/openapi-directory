package operations




type PostPutGroupPolicyActionEnum string

const (
    PostPutGroupPolicyActionEnumPutGroupPolicy PostPutGroupPolicyActionEnum = "PutGroupPolicy"
)



type PostPutGroupPolicyVersionEnum string

const (
    PostPutGroupPolicyVersionEnumTwoThousandAndTen0508 PostPutGroupPolicyVersionEnum = "2010-05-08"
)


type PostPutGroupPolicyQueryParams struct {
    Action PostPutGroupPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutGroupPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutGroupPolicyRequest struct {
    QueryParams PostPutGroupPolicyQueryParams 
    Headers PostPutGroupPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutGroupPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

