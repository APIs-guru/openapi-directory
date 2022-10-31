package operations

import (
"openapi/pkg/models/shared")

type ImportApplicationUsageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ImportApplicationUsageRequestBodySourceS3Location struct {
    Bucket *string `json:"bucket,omitempty"`
    Key *string `json:"key,omitempty"`
    Region *shared.S3BucketRegionEnum `json:"region,omitempty"`
    
}

type ImportApplicationUsageRequestBody struct {
    SourceS3Location ImportApplicationUsageRequestBodySourceS3Location `json:"sourceS3Location"`
    
}

type ImportApplicationUsageRequest struct {
    Headers ImportApplicationUsageHeaders 
    Request ImportApplicationUsageRequestBody `request:"mediaType=application/json"`
    
}

type ImportApplicationUsageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ImportApplicationUsageResult *shared.ImportApplicationUsageResult 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

