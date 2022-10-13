package shared

type StartSchemaExtensionRequest struct {
	CreateSnapshotBeforeSchemaExtension bool   `json:"CreateSnapshotBeforeSchemaExtension"`
	Description                         string `json:"Description"`
	DirectoryID                         string `json:"DirectoryId"`
	LdifContent                         string `json:"LdifContent"`
}
