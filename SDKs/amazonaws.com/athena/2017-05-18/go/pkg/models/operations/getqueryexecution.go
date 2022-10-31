package operations

import (
"openapi/pkg/models/shared")


type GetQueryExecutionXAmzTargetEnum string

const (
    GetQueryExecutionXAmzTargetEnumAmazonAthenaGetQueryExecution GetQueryExecutionXAmzTargetEnum = "AmazonAthena.GetQueryExecution"
)


type GetQueryExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetQueryExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetQueryExecutionRequest struct {
    Headers GetQueryExecutionHeaders 
    Request shared.GetQueryExecutionInput `request:"mediaType=application/json"`
    
}

type GetQueryExecutionResponse struct {
    ContentType string 
    GetQueryExecutionOutput *shared.GetQueryExecutionOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

