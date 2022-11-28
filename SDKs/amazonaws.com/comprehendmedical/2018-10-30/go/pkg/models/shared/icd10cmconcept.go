package shared

// Icd10CmConcept
//
//	The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
type Icd10CmConcept struct {
	Code        *string  `json:"Code,omitempty"`
	Description *string  `json:"Description,omitempty"`
	Score       *float32 `json:"Score,omitempty"`
}
