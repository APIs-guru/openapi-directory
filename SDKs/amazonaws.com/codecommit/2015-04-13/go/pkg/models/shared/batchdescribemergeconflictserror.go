package shared



type BatchDescribeMergeConflictsError struct {
    ExceptionName string `json:"exceptionName"`
    FilePath string `json:"filePath"`
    Message string `json:"message"`
    
}

