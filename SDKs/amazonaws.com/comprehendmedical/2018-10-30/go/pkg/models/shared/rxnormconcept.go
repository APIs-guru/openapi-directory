package shared

// RxNormConcept
// The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.
type RxNormConcept struct {
	Code        *string  `json:"Code,omitempty"`
	Description *string  `json:"Description,omitempty"`
	Score       *float32 `json:"Score,omitempty"`
}
