package operations

import (
"openapi/pkg/models/shared")

type DeleteDatasetPathParams struct {
    DatasetName string `pathParam:"style=simple,explode=false,name=DatasetName"`
    IdentityID string `pathParam:"style=simple,explode=false,name=IdentityId"`
    IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
    
}

type DeleteDatasetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDatasetRequest struct {
    PathParams DeleteDatasetPathParams 
    Headers DeleteDatasetHeaders 
    
}

type DeleteDatasetResponse struct {
    ContentType string 
    DeleteDatasetResponse *shared.DeleteDatasetResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

