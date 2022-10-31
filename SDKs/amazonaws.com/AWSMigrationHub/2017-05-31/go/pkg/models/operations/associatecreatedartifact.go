package operations

import (
"openapi/pkg/models/shared")


type AssociateCreatedArtifactXAmzTargetEnum string

const (
    AssociateCreatedArtifactXAmzTargetEnumAwsMigrationHubAssociateCreatedArtifact AssociateCreatedArtifactXAmzTargetEnum = "AWSMigrationHub.AssociateCreatedArtifact"
)


type AssociateCreatedArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateCreatedArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateCreatedArtifactRequest struct {
    Headers AssociateCreatedArtifactHeaders 
    Request shared.AssociateCreatedArtifactRequest `request:"mediaType=application/json"`
    
}

type AssociateCreatedArtifactResponse struct {
    AccessDeniedException *interface{} 
    AssociateCreatedArtifactResult map[string]interface{} 
    ContentType string 
    DryRunOperation *interface{} 
    HomeRegionNotSetException *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedOperation *interface{} 
    
}

