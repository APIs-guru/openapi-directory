package operations



type DeleteAccessPolicyPathParams struct {
    AccessPolicyID string `pathParam:"style=simple,explode=false,name=accessPolicyId"`
    
}

type DeleteAccessPolicyQueryParams struct {
    ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
    
}

type DeleteAccessPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteAccessPolicyRequest struct {
    PathParams DeleteAccessPolicyPathParams 
    QueryParams DeleteAccessPolicyQueryParams 
    Headers DeleteAccessPolicyHeaders 
    
}

type DeleteAccessPolicyResponse struct {
    ContentType string 
    DeleteAccessPolicyResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

