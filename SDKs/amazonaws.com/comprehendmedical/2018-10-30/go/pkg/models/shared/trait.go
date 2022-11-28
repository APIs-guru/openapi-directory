package shared

// Trait
//
//	Provides contextual information about the extracted entity.
type Trait struct {
	Name  *AttributeNameEnum `json:"Name,omitempty"`
	Score *float32           `json:"Score,omitempty"`
}
