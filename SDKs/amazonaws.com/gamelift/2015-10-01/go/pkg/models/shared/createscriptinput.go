package shared

type CreateScriptInput struct {
	Name            *string     `json:"Name"`
	StorageLocation *S3Location `json:"StorageLocation"`
	Tags            []Tag       `json:"Tags"`
	Version         *string     `json:"Version"`
	ZipFile         *string     `json:"ZipFile"`
}
