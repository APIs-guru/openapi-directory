package operations

import (
"openapi/pkg/models/shared")


type DescribeDominantLanguageDetectionJobXAmzTargetEnum string

const (
    DescribeDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127DescribeDominantLanguageDetectionJob DescribeDominantLanguageDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"
)


type DescribeDominantLanguageDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDominantLanguageDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDominantLanguageDetectionJobRequest struct {
    Headers DescribeDominantLanguageDetectionJobHeaders 
    Request shared.DescribeDominantLanguageDetectionJobRequest `request:"mediaType=application/json"`
    
}

type DescribeDominantLanguageDetectionJobResponse struct {
    ContentType string 
    DescribeDominantLanguageDetectionJobResponse *shared.DescribeDominantLanguageDetectionJobResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    JobNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

