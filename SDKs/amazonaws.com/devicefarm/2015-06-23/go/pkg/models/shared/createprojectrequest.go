package shared



type CreateProjectRequest struct {
    DefaultJobTimeoutMinutes *int64 `json:"defaultJobTimeoutMinutes,omitempty"`
    Name string `json:"name"`
    
}

