package shared

type PropertyPredicate struct {
	Comparator *ComparatorEnum `json:"Comparator,omitempty"`
	Key        *string         `json:"Key,omitempty"`
	Value      *string         `json:"Value,omitempty"`
}
