package shared

type DescribeReplicationTaskAssessmentRunsResponse struct {
	Marker                        *string                        `json:"Marker"`
	ReplicationTaskAssessmentRuns []ReplicationTaskAssessmentRun `json:"ReplicationTaskAssessmentRuns"`
}
