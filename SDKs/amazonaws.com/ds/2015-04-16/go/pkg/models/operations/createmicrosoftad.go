package operations

import (
"openapi/pkg/models/shared")


type CreateMicrosoftAdxAmzTargetEnum string

const (
    CreateMicrosoftAdxAmzTargetEnumDirectoryService20150416CreateMicrosoftAd CreateMicrosoftAdxAmzTargetEnum = "DirectoryService_20150416.CreateMicrosoftAD"
)


type CreateMicrosoftAdHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateMicrosoftAdxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateMicrosoftAdRequest struct {
    Headers CreateMicrosoftAdHeaders 
    Request shared.CreateMicrosoftAdRequest `request:"mediaType=application/json"`
    
}

type CreateMicrosoftAdResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateMicrosoftAdResult *shared.CreateMicrosoftAdResult 
    DirectoryLimitExceededException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

