package operations

import (
"openapi/pkg/models/shared")


type PutResourceAttributesXAmzTargetEnum string

const (
    PutResourceAttributesXAmzTargetEnumAwsMigrationHubPutResourceAttributes PutResourceAttributesXAmzTargetEnum = "AWSMigrationHub.PutResourceAttributes"
)


type PutResourceAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutResourceAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutResourceAttributesRequest struct {
    Headers PutResourceAttributesHeaders 
    Request shared.PutResourceAttributesRequest `request:"mediaType=application/json"`
    
}

type PutResourceAttributesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DryRunOperation *interface{} 
    HomeRegionNotSetException *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    PutResourceAttributesResult map[string]interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedOperation *interface{} 
    
}

