package operations

import (
"openapi/pkg/models/shared")

type GetPartitionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetPartitionsXAmzTargetEnum string

const (
    GetPartitionsXAmzTargetEnumAwsGlueGetPartitions GetPartitionsXAmzTargetEnum = "AWSGlue.GetPartitions"
)


type GetPartitionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPartitionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPartitionsRequest struct {
    QueryParams GetPartitionsQueryParams 
    Headers GetPartitionsHeaders 
    Request shared.GetPartitionsRequest `request:"mediaType=application/json"`
    
}

type GetPartitionsResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetPartitionsResponse *shared.GetPartitionsResponse 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

