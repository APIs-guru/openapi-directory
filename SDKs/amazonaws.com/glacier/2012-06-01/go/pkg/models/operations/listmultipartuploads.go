package operations

import (
"openapi/pkg/models/shared")

type ListMultipartUploadsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type ListMultipartUploadsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    
}

type ListMultipartUploadsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListMultipartUploadsRequest struct {
    PathParams ListMultipartUploadsPathParams 
    QueryParams ListMultipartUploadsQueryParams 
    Headers ListMultipartUploadsHeaders 
    
}

type ListMultipartUploadsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListMultipartUploadsOutput *shared.ListMultipartUploadsOutput 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

