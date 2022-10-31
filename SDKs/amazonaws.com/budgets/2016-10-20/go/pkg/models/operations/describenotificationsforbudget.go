package operations

import (
"openapi/pkg/models/shared")

type DescribeNotificationsForBudgetQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeNotificationsForBudgetXAmzTargetEnum string

const (
    DescribeNotificationsForBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeNotificationsForBudget DescribeNotificationsForBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
)


type DescribeNotificationsForBudgetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNotificationsForBudgetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNotificationsForBudgetRequest struct {
    QueryParams DescribeNotificationsForBudgetQueryParams 
    Headers DescribeNotificationsForBudgetHeaders 
    Request shared.DescribeNotificationsForBudgetRequest `request:"mediaType=application/json"`
    
}

type DescribeNotificationsForBudgetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeNotificationsForBudgetResponse *shared.DescribeNotificationsForBudgetResponse 
    ExpiredNextTokenException *interface{} 
    InternalErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

