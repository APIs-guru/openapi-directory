package operations

import (
"openapi/pkg/models/shared")


type CreateLocationEfsXAmzTargetEnum string

const (
    CreateLocationEfsXAmzTargetEnumFmrsServiceCreateLocationEfs CreateLocationEfsXAmzTargetEnum = "FmrsService.CreateLocationEfs"
)


type CreateLocationEfsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLocationEfsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLocationEfsRequest struct {
    Headers CreateLocationEfsHeaders 
    Request shared.CreateLocationEfsRequest `request:"mediaType=application/json"`
    
}

type CreateLocationEfsResponse struct {
    ContentType string 
    CreateLocationEfsResponse *shared.CreateLocationEfsResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

