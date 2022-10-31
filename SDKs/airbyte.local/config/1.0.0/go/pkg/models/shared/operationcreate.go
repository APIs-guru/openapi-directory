package shared

type OperationCreate struct {
	Name                  string                `json:"name"`
	OperatorConfiguration OperatorConfiguration `json:"operatorConfiguration"`
	WorkspaceID           string                `json:"workspaceId"`
}
