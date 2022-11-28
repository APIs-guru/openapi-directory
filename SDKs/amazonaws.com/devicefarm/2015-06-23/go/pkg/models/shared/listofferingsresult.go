package shared

// ListOfferingsResult
// Represents the return values of the list of offerings.
type ListOfferingsResult struct {
	NextToken *string    `json:"nextToken,omitempty"`
	Offerings []Offering `json:"offerings,omitempty"`
}
