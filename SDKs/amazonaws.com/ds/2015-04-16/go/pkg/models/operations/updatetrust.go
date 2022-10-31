package operations

import (
"openapi/pkg/models/shared")


type UpdateTrustXAmzTargetEnum string

const (
    UpdateTrustXAmzTargetEnumDirectoryService20150416UpdateTrust UpdateTrustXAmzTargetEnum = "DirectoryService_20150416.UpdateTrust"
)


type UpdateTrustHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateTrustXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateTrustRequest struct {
    Headers UpdateTrustHeaders 
    Request shared.UpdateTrustRequest `request:"mediaType=application/json"`
    
}

type UpdateTrustResponse struct {
    ClientException *interface{} 
    ContentType string 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UpdateTrustResult *shared.UpdateTrustResult 
    
}

