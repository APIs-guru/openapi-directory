package operations

import (
"openapi/pkg/models/shared")


type DeleteLagXAmzTargetEnum string

const (
    DeleteLagXAmzTargetEnumOvertureServiceDeleteLag DeleteLagXAmzTargetEnum = "OvertureService.DeleteLag"
)


type DeleteLagHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteLagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteLagRequest struct {
    Headers DeleteLagHeaders 
    Request shared.DeleteLagRequest `request:"mediaType=application/json"`
    
}

type DeleteLagResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    Lag *shared.Lag 
    StatusCode int64 
    
}

