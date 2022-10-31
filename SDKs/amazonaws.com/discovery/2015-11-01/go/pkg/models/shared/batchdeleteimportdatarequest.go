package shared

type BatchDeleteImportDataRequest struct {
	ImportTaskIds []string `json:"importTaskIds"`
}
