package operations



type DetachPrincipalPolicyPathParams struct {
    PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
    
}

type DetachPrincipalPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznIotPrincipal string `header:"style=simple,explode=false,name=x-amzn-iot-principal"`
    
}

type DetachPrincipalPolicyRequest struct {
    PathParams DetachPrincipalPolicyPathParams 
    Headers DetachPrincipalPolicyHeaders 
    
}

type DetachPrincipalPolicyResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

