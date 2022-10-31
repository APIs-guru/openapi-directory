package operations

import (
"openapi/pkg/models/shared")


type DescribeApplicationStateXAmzTargetEnum string

const (
    DescribeApplicationStateXAmzTargetEnumAwsMigrationHubDescribeApplicationState DescribeApplicationStateXAmzTargetEnum = "AWSMigrationHub.DescribeApplicationState"
)


type DescribeApplicationStateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeApplicationStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeApplicationStateRequest struct {
    Headers DescribeApplicationStateHeaders 
    Request shared.DescribeApplicationStateRequest `request:"mediaType=application/json"`
    
}

type DescribeApplicationStateResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeApplicationStateResult *shared.DescribeApplicationStateResult 
    HomeRegionNotSetException *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    PolicyErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

