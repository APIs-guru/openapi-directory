package shared

// BatchDescribeMergeConflictsError
// Returns information about errors in a BatchDescribeMergeConflicts operation.
type BatchDescribeMergeConflictsError struct {
	ExceptionName string `json:"exceptionName"`
	FilePath      string `json:"filePath"`
	Message       string `json:"message"`
}
