package operations

import (
"openapi/pkg/models/shared")


type ListIcd10CmInferenceJobsXAmzTargetEnum string

const (
    ListIcd10CmInferenceJobsXAmzTargetEnumComprehendMedical20181030ListIcd10CmInferenceJobs ListIcd10CmInferenceJobsXAmzTargetEnum = "ComprehendMedical_20181030.ListICD10CMInferenceJobs"
)


type ListIcd10CmInferenceJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListIcd10CmInferenceJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListIcd10CmInferenceJobsRequest struct {
    Headers ListIcd10CmInferenceJobsHeaders 
    Request shared.ListIcd10CmInferenceJobsRequest `request:"mediaType=application/json"`
    
}

type ListIcd10CmInferenceJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListIcd10CmInferenceJobsResponse *shared.ListIcd10CmInferenceJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    ValidationException *interface{} 
    
}

