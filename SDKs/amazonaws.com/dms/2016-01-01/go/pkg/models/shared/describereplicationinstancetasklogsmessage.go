package shared

type DescribeReplicationInstanceTaskLogsMessage struct {
	Marker                 *string `json:"Marker"`
	MaxRecords             *int64  `json:"MaxRecords"`
	ReplicationInstanceArn string  `json:"ReplicationInstanceArn"`
}
