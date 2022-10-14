package shared

type AdvancedEventSelector struct {
	FieldSelectors []AdvancedFieldSelector `json:"FieldSelectors"`
	Name           *string                 `json:"Name,omitempty"`
}
