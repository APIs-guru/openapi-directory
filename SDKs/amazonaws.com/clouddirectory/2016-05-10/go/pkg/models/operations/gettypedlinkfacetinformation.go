package operations

import (
"openapi/pkg/models/shared")

type GetTypedLinkFacetInformationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type GetTypedLinkFacetInformationRequestBody struct {
    Name string `json:"Name"`
    
}

type GetTypedLinkFacetInformationRequest struct {
    Headers GetTypedLinkFacetInformationHeaders 
    Request GetTypedLinkFacetInformationRequestBody `request:"mediaType=application/json"`
    
}

type GetTypedLinkFacetInformationResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    FacetNotFoundException *shared.FacetNotFoundException 
    GetTypedLinkFacetInformationResponse *shared.GetTypedLinkFacetInformationResponse 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidNextTokenException *shared.InvalidNextTokenException 
    LimitExceededException *shared.LimitExceededException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

