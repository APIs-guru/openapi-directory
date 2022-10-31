package operations

import (
"openapi/pkg/models/shared")


type DeleteEndpointXAmzTargetEnum string

const (
    DeleteEndpointXAmzTargetEnumAmazonDmSv20160101DeleteEndpoint DeleteEndpointXAmzTargetEnum = "AmazonDMSv20160101.DeleteEndpoint"
)


type DeleteEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteEndpointRequest struct {
    Headers DeleteEndpointHeaders 
    Request shared.DeleteEndpointMessage `request:"mediaType=application/json"`
    
}

type DeleteEndpointResponse struct {
    ContentType string 
    DeleteEndpointResponse *shared.DeleteEndpointResponse 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

