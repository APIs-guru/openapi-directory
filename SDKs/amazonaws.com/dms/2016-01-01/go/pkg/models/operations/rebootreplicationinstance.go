package operations

import (
"openapi/pkg/models/shared")


type RebootReplicationInstanceXAmzTargetEnum string

const (
    RebootReplicationInstanceXAmzTargetEnumAmazonDmSv20160101RebootReplicationInstance RebootReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.RebootReplicationInstance"
)


type RebootReplicationInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RebootReplicationInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RebootReplicationInstanceRequest struct {
    Headers RebootReplicationInstanceHeaders 
    Request shared.RebootReplicationInstanceMessage `request:"mediaType=application/json"`
    
}

type RebootReplicationInstanceResponse struct {
    ContentType string 
    InvalidResourceStateFault *interface{} 
    RebootReplicationInstanceResponse *shared.RebootReplicationInstanceResponse 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

