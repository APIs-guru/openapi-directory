package operations

import (
"openapi/pkg/models/shared")


type RegisterEventTopicXAmzTargetEnum string

const (
    RegisterEventTopicXAmzTargetEnumDirectoryService20150416RegisterEventTopic RegisterEventTopicXAmzTargetEnum = "DirectoryService_20150416.RegisterEventTopic"
)


type RegisterEventTopicHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterEventTopicXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterEventTopicRequest struct {
    Headers RegisterEventTopicHeaders 
    Request shared.RegisterEventTopicRequest `request:"mediaType=application/json"`
    
}

type RegisterEventTopicResponse struct {
    ClientException *interface{} 
    ContentType string 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    RegisterEventTopicResult map[string]interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    
}

