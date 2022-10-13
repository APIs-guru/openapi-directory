package shared

type DescribeReplicationSubnetGroupsMessage struct {
	Filters    []Filter `json:"Filters"`
	Marker     *string  `json:"Marker"`
	MaxRecords *int64   `json:"MaxRecords"`
}
