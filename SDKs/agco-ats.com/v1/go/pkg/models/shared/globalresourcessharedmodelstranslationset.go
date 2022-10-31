package shared

import (
"time")


type GlobalResourcesSharedModelsTranslationSetStateEnum string

const (
    GlobalResourcesSharedModelsTranslationSetStateEnumOutForProcessing GlobalResourcesSharedModelsTranslationSetStateEnum = "OutForProcessing"
GlobalResourcesSharedModelsTranslationSetStateEnumProcessing GlobalResourcesSharedModelsTranslationSetStateEnum = "Processing"
GlobalResourcesSharedModelsTranslationSetStateEnumPendingApproval GlobalResourcesSharedModelsTranslationSetStateEnum = "PendingApproval"
GlobalResourcesSharedModelsTranslationSetStateEnumOutForTranslation GlobalResourcesSharedModelsTranslationSetStateEnum = "OutForTranslation"
GlobalResourcesSharedModelsTranslationSetStateEnumCancelled GlobalResourcesSharedModelsTranslationSetStateEnum = "Cancelled"
GlobalResourcesSharedModelsTranslationSetStateEnumCompleted GlobalResourcesSharedModelsTranslationSetStateEnum = "Completed"
)


type GlobalResourcesSharedModelsTranslationSet struct {
    Attributes []GlobalResourcesSharedModelsTranslationSetAttribute `json:"Attributes,omitempty"`
    FileIDs []string `json:"FileIDs"`
    ID *int32 `json:"Id,omitempty"`
    InDate *time.Time `json:"InDate,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    OutDate *time.Time `json:"OutDate,omitempty"`
    State GlobalResourcesSharedModelsTranslationSetStateEnum `json:"State"`
    TranslationRequestID *int32 `json:"TranslationRequestID,omitempty"`
    
}

