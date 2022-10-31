package operations

import (
"openapi/pkg/models/shared")

type DisassociateRepositoryPathParams struct {
    AssociationArn string `pathParam:"style=simple,explode=false,name=AssociationArn"`
    
}

type DisassociateRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisassociateRepositoryRequest struct {
    PathParams DisassociateRepositoryPathParams 
    Headers DisassociateRepositoryHeaders 
    
}

type DisassociateRepositoryResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DisassociateRepositoryResponse *shared.DisassociateRepositoryResponse 
    InternalServerException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

