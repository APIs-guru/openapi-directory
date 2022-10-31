package operations



type DeleteConnectorProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteConnectorProfileRequestBody struct {
    ConnectorProfileName string `json:"connectorProfileName"`
    ForceDelete *bool `json:"forceDelete,omitempty"`
    
}

type DeleteConnectorProfileRequest struct {
    Headers DeleteConnectorProfileHeaders 
    Request DeleteConnectorProfileRequestBody `request:"mediaType=application/json"`
    
}

type DeleteConnectorProfileResponse struct {
    ConflictException *interface{} 
    ContentType string 
    DeleteConnectorProfileResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

