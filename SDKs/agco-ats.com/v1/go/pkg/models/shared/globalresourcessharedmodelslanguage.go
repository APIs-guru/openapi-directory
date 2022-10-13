package shared

type GlobalResourcesSharedModelsLanguage struct {
	Description string `json:"Description" form:"name=Description"`
	IsDeleted   *bool  `json:"IsDeleted" form:"name=IsDeleted"`
	LocaleID    int32  `json:"LocaleId" form:"name=LocaleId"`
}
