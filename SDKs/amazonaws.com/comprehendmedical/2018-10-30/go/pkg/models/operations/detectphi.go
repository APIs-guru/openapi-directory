package operations

import (
"openapi/pkg/models/shared")


type DetectPhixAmzTargetEnum string

const (
    DetectPhixAmzTargetEnumComprehendMedical20181030DetectPhi DetectPhixAmzTargetEnum = "ComprehendMedical_20181030.DetectPHI"
)


type DetectPhiHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectPhixAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectPhiRequest struct {
    Headers DetectPhiHeaders 
    Request shared.DetectPhiRequest `request:"mediaType=application/json"`
    
}

type DetectPhiResponse struct {
    ContentType string 
    DetectPhiResponse *shared.DetectPhiResponse 
    InternalServerException *interface{} 
    InvalidEncodingException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TextSizeLimitExceededException *interface{} 
    TooManyRequestsException *interface{} 
    
}

