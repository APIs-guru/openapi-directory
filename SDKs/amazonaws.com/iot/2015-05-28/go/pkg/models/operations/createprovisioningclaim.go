package operations

import (
"openapi/pkg/models/shared")

type CreateProvisioningClaimPathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
    
}

type CreateProvisioningClaimHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateProvisioningClaimRequest struct {
    PathParams CreateProvisioningClaimPathParams 
    Headers CreateProvisioningClaimHeaders 
    
}

type CreateProvisioningClaimResponse struct {
    ContentType string 
    CreateProvisioningClaimResponse *shared.CreateProvisioningClaimResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

