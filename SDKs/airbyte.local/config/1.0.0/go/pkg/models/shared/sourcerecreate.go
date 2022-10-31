package shared

type SourceRecreate struct {
	ConnectionConfiguration interface{} `json:"connectionConfiguration"`
	Name                    string      `json:"name"`
	SourceDefinitionID      string      `json:"sourceDefinitionId"`
	SourceID                string      `json:"sourceId"`
	WorkspaceID             string      `json:"workspaceId"`
}
