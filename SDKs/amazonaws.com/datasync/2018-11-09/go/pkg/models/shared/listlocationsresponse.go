package shared

type ListLocationsResponse struct {
	Locations []LocationListEntry `json:"Locations,omitempty"`
	NextToken *string             `json:"NextToken,omitempty"`
}
