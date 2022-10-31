package operations

import (
"openapi/pkg/models/shared")


type DescribeRemediationConfigurationsXAmzTargetEnum string

const (
    DescribeRemediationConfigurationsXAmzTargetEnumStarlingDoveServiceDescribeRemediationConfigurations DescribeRemediationConfigurationsXAmzTargetEnum = "StarlingDoveService.DescribeRemediationConfigurations"
)


type DescribeRemediationConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRemediationConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRemediationConfigurationsRequest struct {
    Headers DescribeRemediationConfigurationsHeaders 
    Request shared.DescribeRemediationConfigurationsRequest `request:"mediaType=application/json"`
    
}

type DescribeRemediationConfigurationsResponse struct {
    ContentType string 
    DescribeRemediationConfigurationsResponse *shared.DescribeRemediationConfigurationsResponse 
    StatusCode int64 
    
}

