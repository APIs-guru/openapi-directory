package operations

import (
"openapi/pkg/models/shared")


type CreateEndpointXAmzTargetEnum string

const (
    CreateEndpointXAmzTargetEnumAmazonDmSv20160101CreateEndpoint CreateEndpointXAmzTargetEnum = "AmazonDMSv20160101.CreateEndpoint"
)


type CreateEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateEndpointRequest struct {
    Headers CreateEndpointHeaders 
    Request shared.CreateEndpointMessage `request:"mediaType=application/json"`
    
}

type CreateEndpointResponse struct {
    AccessDeniedFault *interface{} 
    ContentType string 
    CreateEndpointResponse *shared.CreateEndpointResponse 
    InvalidResourceStateFault *interface{} 
    KmsKeyNotAccessibleFault *interface{} 
    ResourceAlreadyExistsFault *interface{} 
    ResourceNotFoundFault *interface{} 
    ResourceQuotaExceededFault *interface{} 
    S3AccessDeniedFault *interface{} 
    StatusCode int64 
    
}

