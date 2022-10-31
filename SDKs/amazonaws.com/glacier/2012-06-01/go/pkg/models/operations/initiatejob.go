package operations

import (
"openapi/pkg/models/shared")

type InitiateJobPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type InitiateJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type InitiateJobRequestBodyJobParameters struct {
    ArchiveID *string `json:"ArchiveId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Format *string `json:"Format,omitempty"`
    InventoryRetrievalParameters *shared.InventoryRetrievalJobInput `json:"InventoryRetrievalParameters,omitempty"`
    OutputLocation *shared.OutputLocation `json:"OutputLocation,omitempty"`
    RetrievalByteRange *string `json:"RetrievalByteRange,omitempty"`
    SnsTopic *string `json:"SNSTopic,omitempty"`
    SelectParameters *shared.SelectParameters `json:"SelectParameters,omitempty"`
    Tier *string `json:"Tier,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

type InitiateJobRequestBody struct {
    JobParameters *InitiateJobRequestBodyJobParameters `json:"jobParameters,omitempty"`
    
}

type InitiateJobRequest struct {
    PathParams InitiateJobPathParams 
    Headers InitiateJobHeaders 
    Request InitiateJobRequestBody `request:"mediaType=application/json"`
    
}

type InitiateJobResponse struct {
    ContentType string 
    InitiateJobOutput map[string]interface{} 
    InsufficientCapacityException *interface{} 
    InvalidParameterValueException *interface{} 
    MissingParameterValueException *interface{} 
    PolicyEnforcedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

