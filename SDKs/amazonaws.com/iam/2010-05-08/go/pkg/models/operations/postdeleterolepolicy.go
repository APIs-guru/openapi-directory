package operations




type PostDeleteRolePolicyActionEnum string

const (
    PostDeleteRolePolicyActionEnumDeleteRolePolicy PostDeleteRolePolicyActionEnum = "DeleteRolePolicy"
)



type PostDeleteRolePolicyVersionEnum string

const (
    PostDeleteRolePolicyVersionEnumTwoThousandAndTen0508 PostDeleteRolePolicyVersionEnum = "2010-05-08"
)


type PostDeleteRolePolicyQueryParams struct {
    Action PostDeleteRolePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteRolePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteRolePolicyRequest struct {
    QueryParams PostDeleteRolePolicyQueryParams 
    Headers PostDeleteRolePolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteRolePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

