package operations

import (
"openapi/pkg/models/shared")


type RebootNodeXAmzTargetEnum string

const (
    RebootNodeXAmzTargetEnumAmazonDaxv3RebootNode RebootNodeXAmzTargetEnum = "AmazonDAXV3.RebootNode"
)


type RebootNodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RebootNodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RebootNodeRequest struct {
    Headers RebootNodeHeaders 
    Request shared.RebootNodeRequest `request:"mediaType=application/json"`
    
}

type RebootNodeResponse struct {
    ClusterNotFoundFault *interface{} 
    ContentType string 
    InvalidClusterStateFault *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidParameterValueException *interface{} 
    NodeNotFoundFault *interface{} 
    RebootNodeResponse *shared.RebootNodeResponse 
    ServiceLinkedRoleNotFoundFault *interface{} 
    StatusCode int64 
    
}

