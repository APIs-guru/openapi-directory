package operations

import (
"openapi/pkg/models/shared")


type ModifyReplicationInstanceXAmzTargetEnum string

const (
    ModifyReplicationInstanceXAmzTargetEnumAmazonDmSv20160101ModifyReplicationInstance ModifyReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.ModifyReplicationInstance"
)


type ModifyReplicationInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ModifyReplicationInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ModifyReplicationInstanceRequest struct {
    Headers ModifyReplicationInstanceHeaders 
    Request shared.ModifyReplicationInstanceMessage `request:"mediaType=application/json"`
    
}

type ModifyReplicationInstanceResponse struct {
    AccessDeniedFault *interface{} 
    ContentType string 
    InsufficientResourceCapacityFault *interface{} 
    InvalidResourceStateFault *interface{} 
    ModifyReplicationInstanceResponse *shared.ModifyReplicationInstanceResponse 
    ResourceAlreadyExistsFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    StorageQuotaExceededFault *interface{} 
    UpgradeDependencyFailureFault *interface{} 
    
}

