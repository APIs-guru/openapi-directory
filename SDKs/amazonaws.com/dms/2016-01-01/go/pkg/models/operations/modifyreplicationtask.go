package operations

import (
"openapi/pkg/models/shared")


type ModifyReplicationTaskXAmzTargetEnum string

const (
    ModifyReplicationTaskXAmzTargetEnumAmazonDmSv20160101ModifyReplicationTask ModifyReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.ModifyReplicationTask"
)


type ModifyReplicationTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ModifyReplicationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ModifyReplicationTaskRequest struct {
    Headers ModifyReplicationTaskHeaders 
    Request shared.ModifyReplicationTaskMessage `request:"mediaType=application/json"`
    
}

type ModifyReplicationTaskResponse struct {
    ContentType string 
    InvalidResourceStateFault *interface{} 
    KmsKeyNotAccessibleFault *interface{} 
    ModifyReplicationTaskResponse *shared.ModifyReplicationTaskResponse 
    ResourceAlreadyExistsFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

