package operations

import (
"openapi/pkg/models/shared")


type AssociateConnectionWithLagXAmzTargetEnum string

const (
    AssociateConnectionWithLagXAmzTargetEnumOvertureServiceAssociateConnectionWithLag AssociateConnectionWithLagXAmzTargetEnum = "OvertureService.AssociateConnectionWithLag"
)


type AssociateConnectionWithLagHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateConnectionWithLagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateConnectionWithLagRequest struct {
    Headers AssociateConnectionWithLagHeaders 
    Request shared.AssociateConnectionWithLagRequest `request:"mediaType=application/json"`
    
}

type AssociateConnectionWithLagResponse struct {
    Connection *shared.Connection 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

