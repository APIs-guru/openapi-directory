package operations

import (
"openapi/pkg/models/shared")

type GetTablesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetTablesXAmzTargetEnum string

const (
    GetTablesXAmzTargetEnumAwsGlueGetTables GetTablesXAmzTargetEnum = "AWSGlue.GetTables"
)


type GetTablesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetTablesRequest struct {
    QueryParams GetTablesQueryParams 
    Headers GetTablesHeaders 
    Request shared.GetTablesRequest `request:"mediaType=application/json"`
    
}

type GetTablesResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetTablesResponse *shared.GetTablesResponse 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

