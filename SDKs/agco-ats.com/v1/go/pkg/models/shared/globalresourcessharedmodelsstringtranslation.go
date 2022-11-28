package shared

type GlobalResourcesSharedModelsStringTranslationStateEnum string

const (
	GlobalResourcesSharedModelsStringTranslationStateEnumOriginal       GlobalResourcesSharedModelsStringTranslationStateEnum = "Original"
	GlobalResourcesSharedModelsStringTranslationStateEnumRequested      GlobalResourcesSharedModelsStringTranslationStateEnum = "Requested"
	GlobalResourcesSharedModelsStringTranslationStateEnumProcessing     GlobalResourcesSharedModelsStringTranslationStateEnum = "Processing"
	GlobalResourcesSharedModelsStringTranslationStateEnumProcessed      GlobalResourcesSharedModelsStringTranslationStateEnum = "Processed"
	GlobalResourcesSharedModelsStringTranslationStateEnumValidated      GlobalResourcesSharedModelsStringTranslationStateEnum = "Validated"
	GlobalResourcesSharedModelsStringTranslationStateEnumInvalidated    GlobalResourcesSharedModelsStringTranslationStateEnum = "Invalidated"
	GlobalResourcesSharedModelsStringTranslationStateEnumRequestPending GlobalResourcesSharedModelsStringTranslationStateEnum = "RequestPending"
	GlobalResourcesSharedModelsStringTranslationStateEnumCreatePending  GlobalResourcesSharedModelsStringTranslationStateEnum = "CreatePending"
)

// GlobalResourcesSharedModelsStringTranslation
// A translation of a string in a specific language
type GlobalResourcesSharedModelsStringTranslation struct {
	AuthorID    *int32                                                 `json:"AuthorId,omitempty" form:"name=AuthorId"`
	LanguageID  *int32                                                 `json:"LanguageId,omitempty" form:"name=LanguageId"`
	State       *GlobalResourcesSharedModelsStringTranslationStateEnum `json:"State,omitempty" form:"name=State"`
	StringID    *string                                                `json:"StringId,omitempty" form:"name=StringId"`
	StringValue string                                                 `json:"StringValue" form:"name=StringValue"`
	Timestamp   *string                                                `json:"Timestamp,omitempty" form:"name=Timestamp"`
}
