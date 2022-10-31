package shared



type JobDetails struct {
    AccountID *string `json:"accountId,omitempty"`
    Data *JobData `json:"data,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

