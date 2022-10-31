package shared

type DescribeOrderableReplicationInstancesMessage struct {
	Marker     *string `json:"Marker,omitempty"`
	MaxRecords *int64  `json:"MaxRecords,omitempty"`
}
