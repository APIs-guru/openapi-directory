package operations




type PostAttachGroupPolicyActionEnum string

const (
    PostAttachGroupPolicyActionEnumAttachGroupPolicy PostAttachGroupPolicyActionEnum = "AttachGroupPolicy"
)



type PostAttachGroupPolicyVersionEnum string

const (
    PostAttachGroupPolicyVersionEnumTwoThousandAndTen0508 PostAttachGroupPolicyVersionEnum = "2010-05-08"
)


type PostAttachGroupPolicyQueryParams struct {
    Action PostAttachGroupPolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAttachGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAttachGroupPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAttachGroupPolicyRequest struct {
    QueryParams PostAttachGroupPolicyQueryParams 
    Headers PostAttachGroupPolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAttachGroupPolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

