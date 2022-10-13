package shared

type DirectoryLimits struct {
	CloudOnlyDirectoriesCurrentCount *int64 `json:"CloudOnlyDirectoriesCurrentCount"`
	CloudOnlyDirectoriesLimit        *int64 `json:"CloudOnlyDirectoriesLimit"`
	CloudOnlyDirectoriesLimitReached *bool  `json:"CloudOnlyDirectoriesLimitReached"`
	CloudOnlyMicrosoftAdCurrentCount *int64 `json:"CloudOnlyMicrosoftADCurrentCount"`
	CloudOnlyMicrosoftAdLimit        *int64 `json:"CloudOnlyMicrosoftADLimit"`
	CloudOnlyMicrosoftAdLimitReached *bool  `json:"CloudOnlyMicrosoftADLimitReached"`
	ConnectedDirectoriesCurrentCount *int64 `json:"ConnectedDirectoriesCurrentCount"`
	ConnectedDirectoriesLimit        *int64 `json:"ConnectedDirectoriesLimit"`
	ConnectedDirectoriesLimitReached *bool  `json:"ConnectedDirectoriesLimitReached"`
}
