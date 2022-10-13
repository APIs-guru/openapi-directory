package shared

type DescribeReplicationTaskAssessmentResultsMessage struct {
	Marker             *string `json:"Marker"`
	MaxRecords         *int64  `json:"MaxRecords"`
	ReplicationTaskArn *string `json:"ReplicationTaskArn"`
}
