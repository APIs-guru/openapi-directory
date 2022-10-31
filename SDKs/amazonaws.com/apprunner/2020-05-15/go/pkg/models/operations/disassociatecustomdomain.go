package operations

import (
"openapi/pkg/models/shared")


type DisassociateCustomDomainXAmzTargetEnum string

const (
    DisassociateCustomDomainXAmzTargetEnumAppRunnerDisassociateCustomDomain DisassociateCustomDomainXAmzTargetEnum = "AppRunner.DisassociateCustomDomain"
)


type DisassociateCustomDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateCustomDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateCustomDomainRequest struct {
    Headers DisassociateCustomDomainHeaders 
    Request shared.DisassociateCustomDomainRequest `request:"mediaType=application/json"`
    
}

type DisassociateCustomDomainResponse struct {
    ContentType string 
    DisassociateCustomDomainResponse *shared.DisassociateCustomDomainResponse 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

