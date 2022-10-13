package shared

type Schedule struct {
	CopyTags             *bool                 `json:"CopyTags"`
	CreateRule           *CreateRule           `json:"CreateRule"`
	CrossRegionCopyRules []CrossRegionCopyRule `json:"CrossRegionCopyRules"`
	DeprecateRule        *DeprecateRule        `json:"DeprecateRule"`
	FastRestoreRule      *FastRestoreRule      `json:"FastRestoreRule"`
	Name                 *string               `json:"Name"`
	RetainRule           *RetainRule           `json:"RetainRule"`
	ShareRules           []ShareRule           `json:"ShareRules"`
	TagsToAdd            []Tag                 `json:"TagsToAdd"`
	VariableTags         []Tag                 `json:"VariableTags"`
}
