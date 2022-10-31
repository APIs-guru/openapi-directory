package operations

import (
"openapi/pkg/models/shared")

type ListFhirImportJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListFhirImportJobsXAmzTargetEnum string

const (
    ListFhirImportJobsXAmzTargetEnumHealthLakeListFhirImportJobs ListFhirImportJobsXAmzTargetEnum = "HealthLake.ListFHIRImportJobs"
)


type ListFhirImportJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListFhirImportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListFhirImportJobsRequest struct {
    QueryParams ListFhirImportJobsQueryParams 
    Headers ListFhirImportJobsHeaders 
    Request shared.ListFhirImportJobsRequest `request:"mediaType=application/json"`
    
}

type ListFhirImportJobsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListFhirImportJobsResponse *shared.ListFhirImportJobsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

