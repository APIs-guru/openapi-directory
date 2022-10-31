package operations

import (
"openapi/pkg/models/shared")

type ListSchemasQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListSchemasXAmzTargetEnum string

const (
    ListSchemasXAmzTargetEnumAwsGlueListSchemas ListSchemasXAmzTargetEnum = "AWSGlue.ListSchemas"
)


type ListSchemasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListSchemasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListSchemasRequest struct {
    QueryParams ListSchemasQueryParams 
    Headers ListSchemasHeaders 
    Request shared.ListSchemasInput `request:"mediaType=application/json"`
    
}

type ListSchemasResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    ListSchemasResponse *shared.ListSchemasResponse 
    StatusCode int64 
    
}

