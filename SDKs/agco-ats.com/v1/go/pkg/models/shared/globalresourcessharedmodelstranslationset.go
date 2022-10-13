package shared

import (
	"time"
)

type GlobalResourcesSharedModelsTranslationSetStateEnum string

const (
	GlobalResourcesSharedModelsTranslationSetStateEnumOutForProcessing  GlobalResourcesSharedModelsTranslationSetStateEnum = "OutForProcessing"
	GlobalResourcesSharedModelsTranslationSetStateEnumProcessing        GlobalResourcesSharedModelsTranslationSetStateEnum = "Processing"
	GlobalResourcesSharedModelsTranslationSetStateEnumPendingApproval   GlobalResourcesSharedModelsTranslationSetStateEnum = "PendingApproval"
	GlobalResourcesSharedModelsTranslationSetStateEnumOutForTranslation GlobalResourcesSharedModelsTranslationSetStateEnum = "OutForTranslation"
	GlobalResourcesSharedModelsTranslationSetStateEnumCancelled         GlobalResourcesSharedModelsTranslationSetStateEnum = "Cancelled"
	GlobalResourcesSharedModelsTranslationSetStateEnumCompleted         GlobalResourcesSharedModelsTranslationSetStateEnum = "Completed"
)

type GlobalResourcesSharedModelsTranslationSet struct {
	Attributes           []GlobalResourcesSharedModelsTranslationSetAttribute `json:"Attributes"`
	FileIDs              []string                                             `json:"FileIDs"`
	ID                   *int32                                               `json:"Id"`
	InDate               *time.Time                                           `json:"InDate"`
	Notes                *string                                              `json:"Notes"`
	OutDate              *time.Time                                           `json:"OutDate"`
	State                GlobalResourcesSharedModelsTranslationSetStateEnum   `json:"State"`
	TranslationRequestID *int32                                               `json:"TranslationRequestID"`
}
