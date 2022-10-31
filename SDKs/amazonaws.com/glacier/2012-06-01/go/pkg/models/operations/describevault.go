package operations

import (
"openapi/pkg/models/shared")

type DescribeVaultPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type DescribeVaultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeVaultRequest struct {
    PathParams DescribeVaultPathParams 
    Headers DescribeVaultHeaders 
    
}

type DescribeVaultResponse struct {
    ContentType string 
    DescribeVaultOutput *shared.DescribeVaultOutput 
    InvalidParameterValueException *interface{} 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

