package shared

type ListOfferingsResult struct {
	NextToken *string    `json:"nextToken"`
	Offerings []Offering `json:"offerings"`
}
