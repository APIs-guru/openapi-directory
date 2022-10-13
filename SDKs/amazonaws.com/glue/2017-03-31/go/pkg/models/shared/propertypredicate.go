package shared

type PropertyPredicate struct {
	Comparator *ComparatorEnum `json:"Comparator"`
	Key        *string         `json:"Key"`
	Value      *string         `json:"Value"`
}
