package operations

import (
"openapi/pkg/models/shared")

type DescribeFleetUtilizationQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeFleetUtilizationXAmzTargetEnum string

const (
    DescribeFleetUtilizationXAmzTargetEnumGameLiftDescribeFleetUtilization DescribeFleetUtilizationXAmzTargetEnum = "GameLift.DescribeFleetUtilization"
)


type DescribeFleetUtilizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFleetUtilizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFleetUtilizationRequest struct {
    QueryParams DescribeFleetUtilizationQueryParams 
    Headers DescribeFleetUtilizationHeaders 
    Request shared.DescribeFleetUtilizationInput `request:"mediaType=application/json"`
    
}

type DescribeFleetUtilizationResponse struct {
    ContentType string 
    DescribeFleetUtilizationOutput *shared.DescribeFleetUtilizationOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

