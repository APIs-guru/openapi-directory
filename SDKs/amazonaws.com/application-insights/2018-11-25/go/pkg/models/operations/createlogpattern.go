package operations

import (
"openapi/pkg/models/shared")


type CreateLogPatternXAmzTargetEnum string

const (
    CreateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceCreateLogPattern CreateLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.CreateLogPattern"
)


type CreateLogPatternHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLogPatternXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLogPatternRequest struct {
    Headers CreateLogPatternHeaders 
    Request shared.CreateLogPatternRequest `request:"mediaType=application/json"`
    
}

type CreateLogPatternResponse struct {
    ContentType string 
    CreateLogPatternResponse *shared.CreateLogPatternResponse 
    InternalServerException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

