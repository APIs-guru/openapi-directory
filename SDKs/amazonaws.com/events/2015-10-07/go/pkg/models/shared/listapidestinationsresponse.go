package shared

type ListAPIDestinationsResponse struct {
	APIDestinations []APIDestination `json:"ApiDestinations,omitempty"`
	NextToken       *string          `json:"NextToken,omitempty"`
}
