package operations

import (
"openapi/pkg/models/shared")


type DeleteReplicationTaskXAmzTargetEnum string

const (
    DeleteReplicationTaskXAmzTargetEnumAmazonDmSv20160101DeleteReplicationTask DeleteReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.DeleteReplicationTask"
)


type DeleteReplicationTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteReplicationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteReplicationTaskRequest struct {
    Headers DeleteReplicationTaskHeaders 
    Request shared.DeleteReplicationTaskMessage `request:"mediaType=application/json"`
    
}

type DeleteReplicationTaskResponse struct {
    ContentType string 
    DeleteReplicationTaskResponse *shared.DeleteReplicationTaskResponse 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

