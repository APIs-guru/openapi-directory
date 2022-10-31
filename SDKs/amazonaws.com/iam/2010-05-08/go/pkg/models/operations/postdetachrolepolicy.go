package operations




type PostDetachRolePolicyActionEnum string

const (
    PostDetachRolePolicyActionEnumDetachRolePolicy PostDetachRolePolicyActionEnum = "DetachRolePolicy"
)



type PostDetachRolePolicyVersionEnum string

const (
    PostDetachRolePolicyVersionEnumTwoThousandAndTen0508 PostDetachRolePolicyVersionEnum = "2010-05-08"
)


type PostDetachRolePolicyQueryParams struct {
    Action PostDetachRolePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDetachRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDetachRolePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDetachRolePolicyRequest struct {
    QueryParams PostDetachRolePolicyQueryParams 
    Headers PostDetachRolePolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDetachRolePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

