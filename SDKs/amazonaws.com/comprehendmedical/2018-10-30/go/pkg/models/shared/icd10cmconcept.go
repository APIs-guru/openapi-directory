package shared

type Icd10CmConcept struct {
	Code        *string  `json:"Code"`
	Description *string  `json:"Description"`
	Score       *float32 `json:"Score"`
}
