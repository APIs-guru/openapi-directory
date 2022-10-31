package operations

import (
"openapi/pkg/models/shared")


type DescribeBudgetXAmzTargetEnum string

const (
    DescribeBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudget DescribeBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudget"
)


type DescribeBudgetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeBudgetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeBudgetRequest struct {
    Headers DescribeBudgetHeaders 
    Request shared.DescribeBudgetRequest `request:"mediaType=application/json"`
    
}

type DescribeBudgetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeBudgetResponse *shared.DescribeBudgetResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

