package shared

// APIPagedResponseMetadata
// Metadata for the paged response
type APIPagedResponseMetadata struct {
	Limit      int32 `json:"Limit"`
	Offset     int32 `json:"Offset"`
	TotalCount int32 `json:"TotalCount"`
}
