package operations

import (
"openapi/pkg/models/shared")

type SearchTablesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type SearchTablesXAmzTargetEnum string

const (
    SearchTablesXAmzTargetEnumAwsGlueSearchTables SearchTablesXAmzTargetEnum = "AWSGlue.SearchTables"
)


type SearchTablesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchTablesRequest struct {
    QueryParams SearchTablesQueryParams 
    Headers SearchTablesHeaders 
    Request shared.SearchTablesRequest `request:"mediaType=application/json"`
    
}

type SearchTablesResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    SearchTablesResponse *shared.SearchTablesResponse 
    StatusCode int64 
    
}

