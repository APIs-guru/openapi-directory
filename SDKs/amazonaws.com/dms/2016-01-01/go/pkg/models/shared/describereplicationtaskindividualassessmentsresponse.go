package shared

// DescribeReplicationTaskIndividualAssessmentsResponse
// <p/>
type DescribeReplicationTaskIndividualAssessmentsResponse struct {
	Marker                               *string                               `json:"Marker,omitempty"`
	ReplicationTaskIndividualAssessments []ReplicationTaskIndividualAssessment `json:"ReplicationTaskIndividualAssessments,omitempty"`
}
