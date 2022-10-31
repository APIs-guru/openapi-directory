package operations

import (
"openapi/pkg/models/shared")


type DescribeIcd10CmInferenceJobXAmzTargetEnum string

const (
    DescribeIcd10CmInferenceJobXAmzTargetEnumComprehendMedical20181030DescribeIcd10CmInferenceJob DescribeIcd10CmInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.DescribeICD10CMInferenceJob"
)


type DescribeIcd10CmInferenceJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeIcd10CmInferenceJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeIcd10CmInferenceJobRequest struct {
    Headers DescribeIcd10CmInferenceJobHeaders 
    Request shared.DescribeIcd10CmInferenceJobRequest `request:"mediaType=application/json"`
    
}

type DescribeIcd10CmInferenceJobResponse struct {
    ContentType string 
    DescribeIcd10CmInferenceJobResponse *shared.DescribeIcd10CmInferenceJobResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

