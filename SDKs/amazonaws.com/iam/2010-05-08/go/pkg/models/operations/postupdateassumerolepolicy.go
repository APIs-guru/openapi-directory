package operations




type PostUpdateAssumeRolePolicyActionEnum string

const (
    PostUpdateAssumeRolePolicyActionEnumUpdateAssumeRolePolicy PostUpdateAssumeRolePolicyActionEnum = "UpdateAssumeRolePolicy"
)



type PostUpdateAssumeRolePolicyVersionEnum string

const (
    PostUpdateAssumeRolePolicyVersionEnumTwoThousandAndTen0508 PostUpdateAssumeRolePolicyVersionEnum = "2010-05-08"
)


type PostUpdateAssumeRolePolicyQueryParams struct {
    Action PostUpdateAssumeRolePolicyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateAssumeRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateAssumeRolePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateAssumeRolePolicyRequest struct {
    QueryParams PostUpdateAssumeRolePolicyQueryParams 
    Headers PostUpdateAssumeRolePolicyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateAssumeRolePolicyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

