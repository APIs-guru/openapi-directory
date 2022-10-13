package shared

type Icd10CmTrait struct {
	Name  *Icd10CmTraitNameEnum `json:"Name"`
	Score *float32              `json:"Score"`
}
