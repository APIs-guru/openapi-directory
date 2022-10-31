package shared

type Address struct {
	Address1   *string `json:"Address1,omitempty"`
	Address2   *string `json:"Address2,omitempty"`
	Address3   *string `json:"Address3,omitempty"`
	Address4   *string `json:"Address4,omitempty"`
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	County     *string `json:"County,omitempty"`
	PostalCode *string `json:"PostalCode,omitempty"`
	Province   *string `json:"Province,omitempty"`
	State      *string `json:"State,omitempty"`
}
