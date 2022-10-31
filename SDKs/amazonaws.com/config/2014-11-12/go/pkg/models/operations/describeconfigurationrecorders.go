package operations

import (
"openapi/pkg/models/shared")


type DescribeConfigurationRecordersXAmzTargetEnum string

const (
    DescribeConfigurationRecordersXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorders DescribeConfigurationRecordersXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationRecorders"
)


type DescribeConfigurationRecordersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConfigurationRecordersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConfigurationRecordersRequest struct {
    Headers DescribeConfigurationRecordersHeaders 
    Request shared.DescribeConfigurationRecordersRequest `request:"mediaType=application/json"`
    
}

type DescribeConfigurationRecordersResponse struct {
    ContentType string 
    DescribeConfigurationRecordersResponse *shared.DescribeConfigurationRecordersResponse 
    NoSuchConfigurationRecorderException *interface{} 
    StatusCode int64 
    
}

