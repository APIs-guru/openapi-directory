package shared

type DescribeExclusionsRequest struct {
	ExclusionArns []string    `json:"exclusionArns"`
	Locale        *LocaleEnum `json:"locale"`
}
