package operations

import (
"openapi/pkg/models/shared")


type AssociateMacSecKeyXAmzTargetEnum string

const (
    AssociateMacSecKeyXAmzTargetEnumOvertureServiceAssociateMacSecKey AssociateMacSecKeyXAmzTargetEnum = "OvertureService.AssociateMacSecKey"
)


type AssociateMacSecKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateMacSecKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateMacSecKeyRequest struct {
    Headers AssociateMacSecKeyHeaders 
    Request shared.AssociateMacSecKeyRequest `request:"mediaType=application/json"`
    
}

type AssociateMacSecKeyResponse struct {
    AssociateMacSecKeyResponse *shared.AssociateMacSecKeyResponse 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

