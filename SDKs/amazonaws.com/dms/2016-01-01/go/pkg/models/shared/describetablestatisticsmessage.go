package shared



type DescribeTableStatisticsMessage struct {
    Filters []Filter `json:"Filters,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    MaxRecords *int64 `json:"MaxRecords,omitempty"`
    ReplicationTaskArn string `json:"ReplicationTaskArn"`
    
}

