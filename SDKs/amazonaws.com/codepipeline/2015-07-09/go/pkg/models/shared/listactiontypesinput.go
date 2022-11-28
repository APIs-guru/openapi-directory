package shared

// ListActionTypesInput
// Represents the input of a <code>ListActionTypes</code> action.
type ListActionTypesInput struct {
	ActionOwnerFilter *ActionOwnerEnum `json:"actionOwnerFilter,omitempty"`
	NextToken         *string          `json:"nextToken,omitempty"`
	RegionFilter      *string          `json:"regionFilter,omitempty"`
}
