package shared

type DescribeReplicationTaskAssessmentResultsResponse struct {
	BucketName                       *string                           `json:"BucketName"`
	Marker                           *string                           `json:"Marker"`
	ReplicationTaskAssessmentResults []ReplicationTaskAssessmentResult `json:"ReplicationTaskAssessmentResults"`
}
