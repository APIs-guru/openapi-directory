package operations

import (
"openapi/pkg/models/shared")

type GetDatasetContentPathParams struct {
    DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
    
}

type GetDatasetContentQueryParams struct {
    VersionID *string `queryParam:"style=form,explode=true,name=versionId"`
    
}

type GetDatasetContentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDatasetContentRequest struct {
    PathParams GetDatasetContentPathParams 
    QueryParams GetDatasetContentQueryParams 
    Headers GetDatasetContentHeaders 
    
}

type GetDatasetContentResponse struct {
    ContentType string 
    GetDatasetContentResponse *shared.GetDatasetContentResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

