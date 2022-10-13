package shared

import (
	"time"
)

type AuthorizationCodesSharedModelsAuthorizationCode struct {
	Code                 *string                                   `json:"Code"`
	CreatedByUserID      *int32                                    `json:"CreatedByUserID"`
	CreatedDate          *time.Time                                `json:"CreatedDate"`
	DataParameters       []AuthorizationCodesSharedModelsParameter `json:"DataParameters"`
	DefinitionID         *string                                   `json:"DefinitionID"`
	DeletedByUserID      *int32                                    `json:"DeletedByUserID"`
	DeletedDate          *time.Time                                `json:"DeletedDate"`
	EffectiveDate        *time.Time                                `json:"EffectiveDate"`
	ID                   *int32                                    `json:"ID"`
	IsDeleted            *bool                                     `json:"IsDeleted"`
	ValidationParameters []AuthorizationCodesSharedModelsParameter `json:"ValidationParameters"`
}
