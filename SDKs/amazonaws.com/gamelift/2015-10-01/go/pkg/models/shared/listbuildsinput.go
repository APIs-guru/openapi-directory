package shared

type ListBuildsInput struct {
	Limit     *int64           `json:"Limit"`
	NextToken *string          `json:"NextToken"`
	Status    *BuildStatusEnum `json:"Status"`
}
