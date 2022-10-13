package shared

type ExportedEnvironmentVariable struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}
