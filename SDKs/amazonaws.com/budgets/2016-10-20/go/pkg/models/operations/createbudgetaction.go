package operations

import (
"openapi/pkg/models/shared")


type CreateBudgetActionXAmzTargetEnum string

const (
    CreateBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayCreateBudgetAction CreateBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.CreateBudgetAction"
)


type CreateBudgetActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateBudgetActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateBudgetActionRequest struct {
    Headers CreateBudgetActionHeaders 
    Request shared.CreateBudgetActionRequest `request:"mediaType=application/json"`
    
}

type CreateBudgetActionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateBudgetActionResponse *shared.CreateBudgetActionResponse 
    CreationLimitExceededException *interface{} 
    DuplicateRecordException *interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

