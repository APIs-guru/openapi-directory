package shared

type DescribeFindingsRequest struct {
	FindingArns []string    `json:"findingArns"`
	Locale      *LocaleEnum `json:"locale,omitempty"`
}
