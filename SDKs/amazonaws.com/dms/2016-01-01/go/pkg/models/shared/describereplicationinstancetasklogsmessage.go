package shared



type DescribeReplicationInstanceTaskLogsMessage struct {
    Marker *string `json:"Marker,omitempty"`
    MaxRecords *int64 `json:"MaxRecords,omitempty"`
    ReplicationInstanceArn string `json:"ReplicationInstanceArn"`
    
}

