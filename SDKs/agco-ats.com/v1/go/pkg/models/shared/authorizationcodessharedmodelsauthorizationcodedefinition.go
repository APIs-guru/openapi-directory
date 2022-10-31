package shared

import (
"time")


type AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum string

const (
    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumWeeks AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Weeks"
AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumDays AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Days"
AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumHours AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Hours"
AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumMinutes AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Minutes"
)


type AuthorizationCodesSharedModelsAuthorizationCodeDefinition struct {
    AuthorizationID *string `json:"AuthorizationID,omitempty"`
    CreatedByUserID *int32 `json:"CreatedByUserID,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DataFields []AuthorizationCodesSharedModelsDataField `json:"DataFields,omitempty"`
    DeletedByUserID *int32 `json:"DeletedByUserID,omitempty"`
    DeletedDate *time.Time `json:"DeletedDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    DurationAccuracy *int32 `json:"DurationAccuracy,omitempty"`
    DurationAmount *int32 `json:"DurationAmount,omitempty"`
    DurationUnits *AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum `json:"DurationUnits,omitempty"`
    HashLength *int32 `json:"HashLength,omitempty"`
    ID *string `json:"ID,omitempty"`
    IsDeleted *bool `json:"IsDeleted,omitempty"`
    Name string `json:"Name"`
    RandomLength *int32 `json:"RandomLength,omitempty"`
    ValidationFields []AuthorizationCodesSharedModelsValidationField `json:"ValidationFields,omitempty"`
    
}

