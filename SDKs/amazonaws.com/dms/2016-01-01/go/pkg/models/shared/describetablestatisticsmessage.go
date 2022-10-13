package shared

type DescribeTableStatisticsMessage struct {
	Filters            []Filter `json:"Filters"`
	Marker             *string  `json:"Marker"`
	MaxRecords         *int64   `json:"MaxRecords"`
	ReplicationTaskArn string   `json:"ReplicationTaskArn"`
}
