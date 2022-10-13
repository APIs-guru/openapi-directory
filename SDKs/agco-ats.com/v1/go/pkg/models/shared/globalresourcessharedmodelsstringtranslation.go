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

type GlobalResourcesSharedModelsStringTranslation struct {
	AuthorID    *int32                                                 `json:"AuthorId" form:"name=AuthorId"`
	LanguageID  *int32                                                 `json:"LanguageId" form:"name=LanguageId"`
	State       *GlobalResourcesSharedModelsStringTranslationStateEnum `json:"State" form:"name=State"`
	StringID    *string                                                `json:"StringId" form:"name=StringId"`
	StringValue string                                                 `json:"StringValue" form:"name=StringValue"`
	Timestamp   *string                                                `json:"Timestamp" form:"name=Timestamp"`
}
