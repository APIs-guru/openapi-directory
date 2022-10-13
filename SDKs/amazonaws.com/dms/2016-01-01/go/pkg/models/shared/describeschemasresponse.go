package shared

type DescribeSchemasResponse struct {
	Marker  *string  `json:"Marker"`
	Schemas []string `json:"Schemas"`
}
