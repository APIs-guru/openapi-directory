package shared

import (
	"time"
)

type Blueprint struct {
	BlueprintLocation        *string               `json:"BlueprintLocation,omitempty"`
	BlueprintServiceLocation *string               `json:"BlueprintServiceLocation,omitempty"`
	CreatedOn                *time.Time            `json:"CreatedOn,omitempty"`
	Description              *string               `json:"Description,omitempty"`
	ErrorMessage             *string               `json:"ErrorMessage,omitempty"`
	LastActiveDefinition     *LastActiveDefinition `json:"LastActiveDefinition,omitempty"`
	LastModifiedOn           *time.Time            `json:"LastModifiedOn,omitempty"`
	Name                     *string               `json:"Name,omitempty"`
	ParameterSpec            *string               `json:"ParameterSpec,omitempty"`
	Status                   *BlueprintStatusEnum  `json:"Status,omitempty"`
}
