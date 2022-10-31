package operations

import (
"openapi/pkg/models/shared")

type AssociateTargetsWithJobPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type AssociateTargetsWithJobQueryParams struct {
    NamespaceID *string `queryParam:"style=form,explode=true,name=namespaceId"`
    
}

type AssociateTargetsWithJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateTargetsWithJobRequestBody struct {
    Comment *string `json:"comment,omitempty"`
    Targets []string `json:"targets"`
    
}

type AssociateTargetsWithJobRequest struct {
    PathParams AssociateTargetsWithJobPathParams 
    QueryParams AssociateTargetsWithJobQueryParams 
    Headers AssociateTargetsWithJobHeaders 
    Request AssociateTargetsWithJobRequestBody `request:"mediaType=application/json"`
    
}

type AssociateTargetsWithJobResponse struct {
    AssociateTargetsWithJobResponse *shared.AssociateTargetsWithJobResponse 
    ContentType string 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

