package operations



type DeleteDatasetContentPathParams struct {
    DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
    
}

type DeleteDatasetContentQueryParams struct {
    VersionID *string `queryParam:"style=form,explode=true,name=versionId"`
    
}

type DeleteDatasetContentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDatasetContentRequest struct {
    PathParams DeleteDatasetContentPathParams 
    QueryParams DeleteDatasetContentQueryParams 
    Headers DeleteDatasetContentHeaders 
    
}

type DeleteDatasetContentResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

