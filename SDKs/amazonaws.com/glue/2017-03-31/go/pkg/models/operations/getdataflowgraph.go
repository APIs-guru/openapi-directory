package operations

import (
"openapi/pkg/models/shared")


type GetDataflowGraphXAmzTargetEnum string

const (
    GetDataflowGraphXAmzTargetEnumAwsGlueGetDataflowGraph GetDataflowGraphXAmzTargetEnum = "AWSGlue.GetDataflowGraph"
)


type GetDataflowGraphHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDataflowGraphXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDataflowGraphRequest struct {
    Headers GetDataflowGraphHeaders 
    Request shared.GetDataflowGraphRequest `request:"mediaType=application/json"`
    
}

type GetDataflowGraphResponse struct {
    ContentType string 
    GetDataflowGraphResponse *shared.GetDataflowGraphResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

