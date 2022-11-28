package shared

// DescribeSchemasMessage
// <p/>
type DescribeSchemasMessage struct {
	EndpointArn string  `json:"EndpointArn"`
	Marker      *string `json:"Marker,omitempty"`
	MaxRecords  *int64  `json:"MaxRecords,omitempty"`
}
