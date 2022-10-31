package operations

import (
"openapi/pkg/models/shared")

type ListAppliedSchemaArnsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListAppliedSchemaArnsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAppliedSchemaArnsRequestBody struct {
    DirectoryArn string `json:"DirectoryArn"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    
}

type ListAppliedSchemaArnsRequest struct {
    QueryParams ListAppliedSchemaArnsQueryParams 
    Headers ListAppliedSchemaArnsHeaders 
    Request ListAppliedSchemaArnsRequestBody `request:"mediaType=application/json"`
    
}

type ListAppliedSchemaArnsResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidNextTokenException *shared.InvalidNextTokenException 
    LimitExceededException *shared.LimitExceededException 
    ListAppliedSchemaArnsResponse *shared.ListAppliedSchemaArnsResponse 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

