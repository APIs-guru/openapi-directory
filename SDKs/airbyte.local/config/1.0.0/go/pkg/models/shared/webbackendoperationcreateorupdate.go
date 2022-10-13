package shared

type WebBackendOperationCreateOrUpdate struct {
	Name                  string                `json:"name"`
	OperationID           *string               `json:"operationId"`
	OperatorConfiguration OperatorConfiguration `json:"operatorConfiguration"`
	WorkspaceID           string                `json:"workspaceId"`
}
