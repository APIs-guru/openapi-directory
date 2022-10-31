package shared



type DescribeJobsResponse struct {
    Jobs []JobDetail `json:"jobs,omitempty"`
    
}

