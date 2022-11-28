package shared

// DescribeEndpointTypesMessage
// <p/>
type DescribeEndpointTypesMessage struct {
	Filters    []Filter `json:"Filters,omitempty"`
	Marker     *string  `json:"Marker,omitempty"`
	MaxRecords *int64   `json:"MaxRecords,omitempty"`
}
