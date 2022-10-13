package shared

import (
	"time"
)

type Blueprint struct {
	BlueprintLocation        *string               `json:"BlueprintLocation"`
	BlueprintServiceLocation *string               `json:"BlueprintServiceLocation"`
	CreatedOn                *time.Time            `json:"CreatedOn"`
	Description              *string               `json:"Description"`
	ErrorMessage             *string               `json:"ErrorMessage"`
	LastActiveDefinition     *LastActiveDefinition `json:"LastActiveDefinition"`
	LastModifiedOn           *time.Time            `json:"LastModifiedOn"`
	Name                     *string               `json:"Name"`
	ParameterSpec            *string               `json:"ParameterSpec"`
	Status                   *BlueprintStatusEnum  `json:"Status"`
}
