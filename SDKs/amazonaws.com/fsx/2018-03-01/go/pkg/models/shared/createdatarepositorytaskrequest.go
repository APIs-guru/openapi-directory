package shared



type CreateDataRepositoryTaskRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    Paths []string `json:"Paths,omitempty"`
    Report CompletionReport `json:"Report"`
    Tags []Tag `json:"Tags,omitempty"`
    Type DataRepositoryTaskTypeEnum `json:"Type"`
    
}

