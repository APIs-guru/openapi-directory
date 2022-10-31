package shared



type DescribeReplicationTaskAssessmentResultsResponse struct {
    BucketName *string `json:"BucketName,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    ReplicationTaskAssessmentResults []ReplicationTaskAssessmentResult `json:"ReplicationTaskAssessmentResults,omitempty"`
    
}

