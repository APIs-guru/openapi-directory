package shared

// DescribeReplicationTaskAssessmentResultsMessage
// <p/>
type DescribeReplicationTaskAssessmentResultsMessage struct {
	Marker             *string `json:"Marker,omitempty"`
	MaxRecords         *int64  `json:"MaxRecords,omitempty"`
	ReplicationTaskArn *string `json:"ReplicationTaskArn,omitempty"`
}
