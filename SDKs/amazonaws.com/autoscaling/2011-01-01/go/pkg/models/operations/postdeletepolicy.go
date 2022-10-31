package operations




type PostDeletePolicyActionEnum string

const (
    PostDeletePolicyActionEnumDeletePolicy PostDeletePolicyActionEnum = "DeletePolicy"
)



type PostDeletePolicyVersionEnum string

const (
    PostDeletePolicyVersionEnumTwoThousandAndEleven0101 PostDeletePolicyVersionEnum = "2011-01-01"
)


type PostDeletePolicyQueryParams struct {
    Action PostDeletePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeletePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeletePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeletePolicyRequest struct {
    QueryParams PostDeletePolicyQueryParams 
    Headers PostDeletePolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeletePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

