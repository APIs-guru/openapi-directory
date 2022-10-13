package shared

type DescribeConnectionsMessage struct {
	Filters    []Filter `json:"Filters"`
	Marker     *string  `json:"Marker"`
	MaxRecords *int64   `json:"MaxRecords"`
}
