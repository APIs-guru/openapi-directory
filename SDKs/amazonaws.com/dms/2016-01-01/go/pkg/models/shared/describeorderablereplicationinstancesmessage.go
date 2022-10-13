package shared

type DescribeOrderableReplicationInstancesMessage struct {
	Marker     *string `json:"Marker"`
	MaxRecords *int64  `json:"MaxRecords"`
}
