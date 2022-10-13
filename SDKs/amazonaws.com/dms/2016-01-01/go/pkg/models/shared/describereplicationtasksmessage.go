package shared

type DescribeReplicationTasksMessage struct {
	Filters         []Filter `json:"Filters"`
	Marker          *string  `json:"Marker"`
	MaxRecords      *int64   `json:"MaxRecords"`
	WithoutSettings *bool    `json:"WithoutSettings"`
}
