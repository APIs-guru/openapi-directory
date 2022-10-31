package shared



type DescribeReplicationTaskAssessmentRunsResponse struct {
    Marker *string `json:"Marker,omitempty"`
    ReplicationTaskAssessmentRuns []ReplicationTaskAssessmentRun `json:"ReplicationTaskAssessmentRuns,omitempty"`
    
}

