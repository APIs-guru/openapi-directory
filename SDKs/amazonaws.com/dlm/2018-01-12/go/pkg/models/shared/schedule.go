package shared

type Schedule struct {
	CopyTags             *bool                 `json:"CopyTags,omitempty"`
	CreateRule           *CreateRule           `json:"CreateRule,omitempty"`
	CrossRegionCopyRules []CrossRegionCopyRule `json:"CrossRegionCopyRules,omitempty"`
	DeprecateRule        *DeprecateRule        `json:"DeprecateRule,omitempty"`
	FastRestoreRule      *FastRestoreRule      `json:"FastRestoreRule,omitempty"`
	Name                 *string               `json:"Name,omitempty"`
	RetainRule           *RetainRule           `json:"RetainRule,omitempty"`
	ShareRules           []ShareRule           `json:"ShareRules,omitempty"`
	TagsToAdd            []Tag                 `json:"TagsToAdd,omitempty"`
	VariableTags         []Tag                 `json:"VariableTags,omitempty"`
}
