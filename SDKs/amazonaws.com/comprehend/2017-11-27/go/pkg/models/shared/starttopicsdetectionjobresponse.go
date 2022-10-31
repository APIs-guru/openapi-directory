package shared



type StartTopicsDetectionJobResponse struct {
    JobArn *string `json:"JobArn,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    
}

