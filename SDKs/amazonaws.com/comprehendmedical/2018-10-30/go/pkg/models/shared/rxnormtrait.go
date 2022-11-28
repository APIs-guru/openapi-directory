package shared

// RxNormTrait
// The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.
type RxNormTrait struct {
	Name  *RxNormTraitNameEnum `json:"Name,omitempty"`
	Score *float32             `json:"Score,omitempty"`
}
