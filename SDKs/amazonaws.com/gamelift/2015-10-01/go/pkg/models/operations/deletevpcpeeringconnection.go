package operations

import (
"openapi/pkg/models/shared")


type DeleteVpcPeeringConnectionXAmzTargetEnum string

const (
    DeleteVpcPeeringConnectionXAmzTargetEnumGameLiftDeleteVpcPeeringConnection DeleteVpcPeeringConnectionXAmzTargetEnum = "GameLift.DeleteVpcPeeringConnection"
)


type DeleteVpcPeeringConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteVpcPeeringConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteVpcPeeringConnectionRequest struct {
    Headers DeleteVpcPeeringConnectionHeaders 
    Request shared.DeleteVpcPeeringConnectionInput `request:"mediaType=application/json"`
    
}

type DeleteVpcPeeringConnectionResponse struct {
    ContentType string 
    DeleteVpcPeeringConnectionOutput map[string]interface{} 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

