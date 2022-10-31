package shared



type ServerProcess struct {
    ConcurrentExecutions int64 `json:"ConcurrentExecutions"`
    LaunchPath string `json:"LaunchPath"`
    Parameters *string `json:"Parameters,omitempty"`
    
}

