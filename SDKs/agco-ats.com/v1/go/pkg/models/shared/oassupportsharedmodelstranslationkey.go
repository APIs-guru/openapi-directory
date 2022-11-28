package shared

// OasSupportSharedModelsTranslationKey
// A translation key to map the relationship of keyNames, usually for ODX, and string Ids
type OasSupportSharedModelsTranslationKey struct {
	ID       *int32 `json:"ID,omitempty" form:"name=ID"`
	KeyName  string `json:"KeyName" form:"name=KeyName"`
	StringID string `json:"StringID" form:"name=StringID"`
}
