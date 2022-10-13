package shared

type ListActionTypesInput struct {
	ActionOwnerFilter *ActionOwnerEnum `json:"actionOwnerFilter"`
	NextToken         *string          `json:"nextToken"`
	RegionFilter      *string          `json:"regionFilter"`
}
