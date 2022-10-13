package shared

import (
	"time"
)

type AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum string

const (
	AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumWeeks   AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Weeks"
	AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumDays    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Days"
	AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumHours   AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Hours"
	AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnumMinutes AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = "Minutes"
)

type AuthorizationCodesSharedModelsAuthorizationCodeDefinition struct {
	AuthorizationID  *string                                                                     `json:"AuthorizationID"`
	CreatedByUserID  *int32                                                                      `json:"CreatedByUserID"`
	CreatedDate      *time.Time                                                                  `json:"CreatedDate"`
	DataFields       []AuthorizationCodesSharedModelsDataField                                   `json:"DataFields"`
	DeletedByUserID  *int32                                                                      `json:"DeletedByUserID"`
	DeletedDate      *time.Time                                                                  `json:"DeletedDate"`
	Description      *string                                                                     `json:"Description"`
	DurationAccuracy *int32                                                                      `json:"DurationAccuracy"`
	DurationAmount   *int32                                                                      `json:"DurationAmount"`
	DurationUnits    *AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum `json:"DurationUnits"`
	HashLength       *int32                                                                      `json:"HashLength"`
	ID               *string                                                                     `json:"ID"`
	IsDeleted        *bool                                                                       `json:"IsDeleted"`
	Name             string                                                                      `json:"Name"`
	RandomLength     *int32                                                                      `json:"RandomLength"`
	ValidationFields []AuthorizationCodesSharedModelsValidationField                             `json:"ValidationFields"`
}
