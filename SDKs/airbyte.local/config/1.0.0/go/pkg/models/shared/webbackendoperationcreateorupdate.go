package shared



type WebBackendOperationCreateOrUpdate struct {
    Name string `json:"name"`
    OperationID *string `json:"operationId,omitempty"`
    OperatorConfiguration OperatorConfiguration `json:"operatorConfiguration"`
    WorkspaceID string `json:"workspaceId"`
    
}

