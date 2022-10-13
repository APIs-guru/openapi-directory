package shared

type UpdateScriptInput struct {
	Name            *string     `json:"Name"`
	ScriptID        string      `json:"ScriptId"`
	StorageLocation *S3Location `json:"StorageLocation"`
	Version         *string     `json:"Version"`
	ZipFile         *string     `json:"ZipFile"`
}
