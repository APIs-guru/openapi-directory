package shared

type BatchDeleteImportDataResponse struct {
	Errors []BatchDeleteImportDataError `json:"errors"`
}
