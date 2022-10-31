package operations

import (
"openapi/pkg/models/shared")


type DeleteReplicationSubnetGroupXAmzTargetEnum string

const (
    DeleteReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101DeleteReplicationSubnetGroup DeleteReplicationSubnetGroupXAmzTargetEnum = "AmazonDMSv20160101.DeleteReplicationSubnetGroup"
)


type DeleteReplicationSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteReplicationSubnetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteReplicationSubnetGroupRequest struct {
    Headers DeleteReplicationSubnetGroupHeaders 
    Request shared.DeleteReplicationSubnetGroupMessage `request:"mediaType=application/json"`
    
}

type DeleteReplicationSubnetGroupResponse struct {
    ContentType string 
    DeleteReplicationSubnetGroupResponse map[string]interface{} 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

