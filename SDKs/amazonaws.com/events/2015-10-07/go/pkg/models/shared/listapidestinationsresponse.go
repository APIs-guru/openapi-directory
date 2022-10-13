package shared

type ListAPIDestinationsResponse struct {
	APIDestinations []APIDestination `json:"ApiDestinations"`
	NextToken       *string          `json:"NextToken"`
}
