package operations

import (
"openapi/pkg/models/shared")


type ConfirmConnectionXAmzTargetEnum string

const (
    ConfirmConnectionXAmzTargetEnumOvertureServiceConfirmConnection ConfirmConnectionXAmzTargetEnum = "OvertureService.ConfirmConnection"
)


type ConfirmConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ConfirmConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ConfirmConnectionRequest struct {
    Headers ConfirmConnectionHeaders 
    Request shared.ConfirmConnectionRequest `request:"mediaType=application/json"`
    
}

type ConfirmConnectionResponse struct {
    ConfirmConnectionResponse *shared.ConfirmConnectionResponse 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

