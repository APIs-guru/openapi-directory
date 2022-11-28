package shared

// DescribeSchemasResponse
// <p/>
type DescribeSchemasResponse struct {
	Marker  *string  `json:"Marker,omitempty"`
	Schemas []string `json:"Schemas,omitempty"`
}
