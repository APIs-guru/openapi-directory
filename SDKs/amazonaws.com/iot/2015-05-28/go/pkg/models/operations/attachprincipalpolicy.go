package operations



type AttachPrincipalPolicyPathParams struct {
    PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
    
}

type AttachPrincipalPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznIotPrincipal string `header:"style=simple,explode=false,name=x-amzn-iot-principal"`
    
}

type AttachPrincipalPolicyRequest struct {
    PathParams AttachPrincipalPolicyPathParams 
    Headers AttachPrincipalPolicyHeaders 
    
}

type AttachPrincipalPolicyResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

