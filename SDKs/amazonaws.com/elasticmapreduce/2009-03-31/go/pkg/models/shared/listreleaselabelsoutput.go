package shared

type ListReleaseLabelsOutput struct {
	NextToken     *string  `json:"NextToken"`
	ReleaseLabels []string `json:"ReleaseLabels"`
}
