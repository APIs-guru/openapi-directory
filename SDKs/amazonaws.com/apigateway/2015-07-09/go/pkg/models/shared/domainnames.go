package shared

type DomainNames struct {
	Items    []DomainName `json:"items,omitempty"`
	Position *string      `json:"position,omitempty"`
}
