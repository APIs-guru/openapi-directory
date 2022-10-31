package operations

import (
"openapi/pkg/models/shared")


type UpdateLogPatternXAmzTargetEnum string

const (
    UpdateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceUpdateLogPattern UpdateLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.UpdateLogPattern"
)


type UpdateLogPatternHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateLogPatternXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateLogPatternRequest struct {
    Headers UpdateLogPatternHeaders 
    Request shared.UpdateLogPatternRequest `request:"mediaType=application/json"`
    
}

type UpdateLogPatternResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateLogPatternResponse *shared.UpdateLogPatternResponse 
    ValidationException *interface{} 
    
}

