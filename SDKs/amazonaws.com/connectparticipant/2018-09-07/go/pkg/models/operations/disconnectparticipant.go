package operations



type DisconnectParticipantHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzBearer string `header:"style=simple,explode=false,name=X-Amz-Bearer"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisconnectParticipantRequestBody struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    
}

type DisconnectParticipantRequest struct {
    Headers DisconnectParticipantHeaders 
    Request DisconnectParticipantRequestBody `request:"mediaType=application/json"`
    
}

type DisconnectParticipantResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DisconnectParticipantResponse map[string]interface{} 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

