package operations

import (
"openapi/pkg/models/shared")


type DetectEntitiesXAmzTargetEnum string

const (
    DetectEntitiesXAmzTargetEnumComprehendMedical20181030DetectEntities DetectEntitiesXAmzTargetEnum = "ComprehendMedical_20181030.DetectEntities"
)


type DetectEntitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectEntitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectEntitiesRequest struct {
    Headers DetectEntitiesHeaders 
    Request shared.DetectEntitiesRequest `request:"mediaType=application/json"`
    
}

type DetectEntitiesResponse struct {
    ContentType string 
    DetectEntitiesResponse *shared.DetectEntitiesResponse 
    InternalServerException *interface{} 
    InvalidEncodingException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TextSizeLimitExceededException *interface{} 
    TooManyRequestsException *interface{} 
    
}

