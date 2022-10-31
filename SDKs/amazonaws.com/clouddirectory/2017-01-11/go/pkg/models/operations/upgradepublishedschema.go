package operations

import (
"openapi/pkg/models/shared")

type UpgradePublishedSchemaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpgradePublishedSchemaRequestBody struct {
    DevelopmentSchemaArn string `json:"DevelopmentSchemaArn"`
    DryRun *bool `json:"DryRun,omitempty"`
    MinorVersion string `json:"MinorVersion"`
    PublishedSchemaArn string `json:"PublishedSchemaArn"`
    
}

type UpgradePublishedSchemaRequest struct {
    Headers UpgradePublishedSchemaHeaders 
    Request UpgradePublishedSchemaRequestBody `request:"mediaType=application/json"`
    
}

type UpgradePublishedSchemaResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IncompatibleSchemaException *interface{} 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    InvalidAttachmentException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    UpgradePublishedSchemaResponse *shared.UpgradePublishedSchemaResponse 
    ValidationException *interface{} 
    
}

