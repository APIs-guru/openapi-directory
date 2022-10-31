package operations

import (
"openapi/pkg/models/shared")


type DescribeLunaClientXAmzTargetEnum string

const (
    DescribeLunaClientXAmzTargetEnumCloudHsmFrontendServiceDescribeLunaClient DescribeLunaClientXAmzTargetEnum = "CloudHsmFrontendService.DescribeLunaClient"
)


type DescribeLunaClientHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLunaClientXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLunaClientRequest struct {
    Headers DescribeLunaClientHeaders 
    Request shared.DescribeLunaClientRequest `request:"mediaType=application/json"`
    
}

type DescribeLunaClientResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    DescribeLunaClientResponse *shared.DescribeLunaClientResponse 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

