package shared

// ListLocationsResponse
// ListLocationsResponse
type ListLocationsResponse struct {
	Locations []LocationListEntry `json:"Locations,omitempty"`
	NextToken *string             `json:"NextToken,omitempty"`
}
