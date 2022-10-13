package shared

type ListLocationsResponse struct {
	Locations []LocationListEntry `json:"Locations"`
	NextToken *string             `json:"NextToken"`
}
