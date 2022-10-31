package operations

import (
"openapi/pkg/models/shared")

type GetVaultLockPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type GetVaultLockHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetVaultLockRequest struct {
    PathParams GetVaultLockPathParams 
    Headers GetVaultLockHeaders 
    
}

type GetVaultLockResponse struct {
    ContentType string 
    GetVaultLockOutput *shared.GetVaultLockOutput 
    InvalidParameterValueException *interface{} 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

