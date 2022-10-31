package operations

import (
"openapi/pkg/models/shared")

type DescribeOrganizationConfigRuleStatusesQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeOrganizationConfigRuleStatusesXAmzTargetEnum string

const (
    DescribeOrganizationConfigRuleStatusesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConfigRuleStatuses DescribeOrganizationConfigRuleStatusesXAmzTargetEnum = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
)


type DescribeOrganizationConfigRuleStatusesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeOrganizationConfigRuleStatusesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeOrganizationConfigRuleStatusesRequest struct {
    QueryParams DescribeOrganizationConfigRuleStatusesQueryParams 
    Headers DescribeOrganizationConfigRuleStatusesHeaders 
    Request shared.DescribeOrganizationConfigRuleStatusesRequest `request:"mediaType=application/json"`
    
}

type DescribeOrganizationConfigRuleStatusesResponse struct {
    ContentType string 
    DescribeOrganizationConfigRuleStatusesResponse *shared.DescribeOrganizationConfigRuleStatusesResponse 
    InvalidLimitException *interface{} 
    InvalidNextTokenException *interface{} 
    NoSuchOrganizationConfigRuleException *interface{} 
    OrganizationAccessDeniedException *interface{} 
    StatusCode int64 
    
}

