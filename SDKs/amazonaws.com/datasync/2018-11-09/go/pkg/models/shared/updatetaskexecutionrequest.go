package shared



type UpdateTaskExecutionRequest struct {
    Options Options `json:"Options"`
    TaskExecutionArn string `json:"TaskExecutionArn"`
    
}

