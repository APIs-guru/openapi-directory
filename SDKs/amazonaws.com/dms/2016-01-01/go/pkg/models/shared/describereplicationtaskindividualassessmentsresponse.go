package shared



type DescribeReplicationTaskIndividualAssessmentsResponse struct {
    Marker *string `json:"Marker,omitempty"`
    ReplicationTaskIndividualAssessments []ReplicationTaskIndividualAssessment `json:"ReplicationTaskIndividualAssessments,omitempty"`
    
}

