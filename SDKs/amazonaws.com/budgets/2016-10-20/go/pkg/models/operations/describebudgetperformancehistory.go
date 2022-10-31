package operations

import (
"openapi/pkg/models/shared")

type DescribeBudgetPerformanceHistoryQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeBudgetPerformanceHistoryXAmzTargetEnum string

const (
    DescribeBudgetPerformanceHistoryXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetPerformanceHistory DescribeBudgetPerformanceHistoryXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
)


type DescribeBudgetPerformanceHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeBudgetPerformanceHistoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeBudgetPerformanceHistoryRequest struct {
    QueryParams DescribeBudgetPerformanceHistoryQueryParams 
    Headers DescribeBudgetPerformanceHistoryHeaders 
    Request shared.DescribeBudgetPerformanceHistoryRequest `request:"mediaType=application/json"`
    
}

type DescribeBudgetPerformanceHistoryResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeBudgetPerformanceHistoryResponse *shared.DescribeBudgetPerformanceHistoryResponse 
    ExpiredNextTokenException *interface{} 
    InternalErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

