package operations

import (
"openapi/pkg/models/shared")

type ListJobsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type ListJobsQueryParams struct {
    Completed *string `queryParam:"style=form,explode=true,name=completed"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    Statuscode *string `queryParam:"style=form,explode=true,name=statuscode"`
    
}

type ListJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListJobsRequest struct {
    PathParams ListJobsPathParams 
    QueryParams ListJobsQueryParams 
    Headers ListJobsHeaders 
    
}

type ListJobsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListJobsOutput *shared.ListJobsOutput 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

