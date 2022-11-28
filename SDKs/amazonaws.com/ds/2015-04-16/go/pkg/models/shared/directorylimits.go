package shared

// DirectoryLimits
// Contains directory limit information for a Region.
type DirectoryLimits struct {
	CloudOnlyDirectoriesCurrentCount *int64 `json:"CloudOnlyDirectoriesCurrentCount,omitempty"`
	CloudOnlyDirectoriesLimit        *int64 `json:"CloudOnlyDirectoriesLimit,omitempty"`
	CloudOnlyDirectoriesLimitReached *bool  `json:"CloudOnlyDirectoriesLimitReached,omitempty"`
	CloudOnlyMicrosoftAdCurrentCount *int64 `json:"CloudOnlyMicrosoftADCurrentCount,omitempty"`
	CloudOnlyMicrosoftAdLimit        *int64 `json:"CloudOnlyMicrosoftADLimit,omitempty"`
	CloudOnlyMicrosoftAdLimitReached *bool  `json:"CloudOnlyMicrosoftADLimitReached,omitempty"`
	ConnectedDirectoriesCurrentCount *int64 `json:"ConnectedDirectoriesCurrentCount,omitempty"`
	ConnectedDirectoriesLimit        *int64 `json:"ConnectedDirectoriesLimit,omitempty"`
	ConnectedDirectoriesLimitReached *bool  `json:"ConnectedDirectoriesLimitReached,omitempty"`
}
