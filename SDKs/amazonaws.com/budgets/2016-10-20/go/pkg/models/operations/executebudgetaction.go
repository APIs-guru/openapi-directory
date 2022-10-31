package operations

import (
"openapi/pkg/models/shared")


type ExecuteBudgetActionXAmzTargetEnum string

const (
    ExecuteBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayExecuteBudgetAction ExecuteBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.ExecuteBudgetAction"
)


type ExecuteBudgetActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExecuteBudgetActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExecuteBudgetActionRequest struct {
    Headers ExecuteBudgetActionHeaders 
    Request shared.ExecuteBudgetActionRequest `request:"mediaType=application/json"`
    
}

type ExecuteBudgetActionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ExecuteBudgetActionResponse *shared.ExecuteBudgetActionResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    ResourceLockedException *interface{} 
    StatusCode int64 
    
}

