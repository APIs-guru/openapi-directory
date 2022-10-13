package shared

type DescribeReplicationTaskIndividualAssessmentsResponse struct {
	Marker                               *string                               `json:"Marker"`
	ReplicationTaskIndividualAssessments []ReplicationTaskIndividualAssessment `json:"ReplicationTaskIndividualAssessments"`
}
