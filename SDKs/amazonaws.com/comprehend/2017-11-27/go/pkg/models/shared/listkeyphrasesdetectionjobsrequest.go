package shared



type ListKeyPhrasesDetectionJobsRequest struct {
    Filter *KeyPhrasesDetectionJobFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

