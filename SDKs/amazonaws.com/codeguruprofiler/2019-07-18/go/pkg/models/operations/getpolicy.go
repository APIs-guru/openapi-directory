package operations

import (
"openapi/pkg/models/shared")

type GetPolicyPathParams struct {
    ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
    
}

type GetPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPolicyRequest struct {
    PathParams GetPolicyPathParams 
    Headers GetPolicyHeaders 
    
}

type GetPolicyResponse struct {
    ContentType string 
    GetPolicyResponse *shared.GetPolicyResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

