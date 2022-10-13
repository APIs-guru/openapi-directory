package shared

type ListReleaseLabelsInput struct {
	Filters    *ReleaseLabelFilter `json:"Filters"`
	MaxResults *int64              `json:"MaxResults"`
	NextToken  *string             `json:"NextToken"`
}
