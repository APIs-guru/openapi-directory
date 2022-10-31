package shared

import (
"time")

type AuthorizationCodesSharedModelsAuthorizationCode struct {
    Code *string `json:"Code,omitempty"`
    CreatedByUserID *int32 `json:"CreatedByUserID,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DataParameters []AuthorizationCodesSharedModelsParameter `json:"DataParameters,omitempty"`
    DefinitionID *string `json:"DefinitionID,omitempty"`
    DeletedByUserID *int32 `json:"DeletedByUserID,omitempty"`
    DeletedDate *time.Time `json:"DeletedDate,omitempty"`
    EffectiveDate *time.Time `json:"EffectiveDate,omitempty"`
    ID *int32 `json:"ID,omitempty"`
    IsDeleted *bool `json:"IsDeleted,omitempty"`
    ValidationParameters []AuthorizationCodesSharedModelsParameter `json:"ValidationParameters,omitempty"`
    
}

