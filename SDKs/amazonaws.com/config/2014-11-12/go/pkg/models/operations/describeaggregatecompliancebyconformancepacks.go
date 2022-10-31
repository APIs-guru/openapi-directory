package operations

import (
"openapi/pkg/models/shared")

type DescribeAggregateComplianceByConformancePacksQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeAggregateComplianceByConformancePacksXAmzTargetEnum string

const (
    DescribeAggregateComplianceByConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeAggregateComplianceByConformancePacks DescribeAggregateComplianceByConformancePacksXAmzTargetEnum = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks"
)


type DescribeAggregateComplianceByConformancePacksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAggregateComplianceByConformancePacksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAggregateComplianceByConformancePacksRequest struct {
    QueryParams DescribeAggregateComplianceByConformancePacksQueryParams 
    Headers DescribeAggregateComplianceByConformancePacksHeaders 
    Request shared.DescribeAggregateComplianceByConformancePacksRequest `request:"mediaType=application/json"`
    
}

type DescribeAggregateComplianceByConformancePacksResponse struct {
    ContentType string 
    DescribeAggregateComplianceByConformancePacksResponse *shared.DescribeAggregateComplianceByConformancePacksResponse 
    InvalidLimitException *interface{} 
    InvalidNextTokenException *interface{} 
    NoSuchConfigurationAggregatorException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

