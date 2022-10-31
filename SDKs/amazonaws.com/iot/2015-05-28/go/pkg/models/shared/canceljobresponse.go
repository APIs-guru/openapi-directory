package shared



type CancelJobResponse struct {
    Description *string `json:"description,omitempty"`
    JobArn *string `json:"jobArn,omitempty"`
    JobID *string `json:"jobId,omitempty"`
    
}

