package operations

import (
"openapi/pkg/models/shared")

type DescribeScheduledActionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeScheduledActionsXAmzTargetEnum string

const (
    DescribeScheduledActionsXAmzTargetEnumAnyScaleFrontendServiceDescribeScheduledActions DescribeScheduledActionsXAmzTargetEnum = "AnyScaleFrontendService.DescribeScheduledActions"
)


type DescribeScheduledActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeScheduledActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeScheduledActionsRequest struct {
    QueryParams DescribeScheduledActionsQueryParams 
    Headers DescribeScheduledActionsHeaders 
    Request shared.DescribeScheduledActionsRequest `request:"mediaType=application/json"`
    
}

type DescribeScheduledActionsResponse struct {
    ConcurrentUpdateException *interface{} 
    ContentType string 
    DescribeScheduledActionsResponse *shared.DescribeScheduledActionsResponse 
    InternalServiceException *interface{} 
    InvalidNextTokenException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

