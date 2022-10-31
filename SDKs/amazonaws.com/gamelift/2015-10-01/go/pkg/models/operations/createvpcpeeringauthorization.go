package operations

import (
"openapi/pkg/models/shared")


type CreateVpcPeeringAuthorizationXAmzTargetEnum string

const (
    CreateVpcPeeringAuthorizationXAmzTargetEnumGameLiftCreateVpcPeeringAuthorization CreateVpcPeeringAuthorizationXAmzTargetEnum = "GameLift.CreateVpcPeeringAuthorization"
)


type CreateVpcPeeringAuthorizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateVpcPeeringAuthorizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateVpcPeeringAuthorizationRequest struct {
    Headers CreateVpcPeeringAuthorizationHeaders 
    Request shared.CreateVpcPeeringAuthorizationInput `request:"mediaType=application/json"`
    
}

type CreateVpcPeeringAuthorizationResponse struct {
    ContentType string 
    CreateVpcPeeringAuthorizationOutput *shared.CreateVpcPeeringAuthorizationOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

