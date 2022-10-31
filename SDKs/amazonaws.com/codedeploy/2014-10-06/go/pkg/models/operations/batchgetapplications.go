package operations

import (
"openapi/pkg/models/shared")


type BatchGetApplicationsXAmzTargetEnum string

const (
    BatchGetApplicationsXAmzTargetEnumCodeDeploy20141006BatchGetApplications BatchGetApplicationsXAmzTargetEnum = "CodeDeploy_20141006.BatchGetApplications"
)


type BatchGetApplicationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchGetApplicationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchGetApplicationsRequest struct {
    Headers BatchGetApplicationsHeaders 
    Request shared.BatchGetApplicationsInput `request:"mediaType=application/json"`
    
}

type BatchGetApplicationsResponse struct {
    ApplicationDoesNotExistException *interface{} 
    ApplicationNameRequiredException *interface{} 
    BatchGetApplicationsOutput *shared.BatchGetApplicationsOutput 
    BatchLimitExceededException *interface{} 
    ContentType string 
    InvalidApplicationNameException *interface{} 
    StatusCode int64 
    
}

