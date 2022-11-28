package shared

// Icd10CmTrait
// Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
type Icd10CmTrait struct {
	Name  *Icd10CmTraitNameEnum `json:"Name,omitempty"`
	Score *float32              `json:"Score,omitempty"`
}
