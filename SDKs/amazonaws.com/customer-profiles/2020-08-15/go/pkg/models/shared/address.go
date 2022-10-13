package shared

type Address struct {
	Address1   *string `json:"Address1"`
	Address2   *string `json:"Address2"`
	Address3   *string `json:"Address3"`
	Address4   *string `json:"Address4"`
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	County     *string `json:"County"`
	PostalCode *string `json:"PostalCode"`
	Province   *string `json:"Province"`
	State      *string `json:"State"`
}
