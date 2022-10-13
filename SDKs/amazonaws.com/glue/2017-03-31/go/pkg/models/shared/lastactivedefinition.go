package shared

import (
	"time"
)

type LastActiveDefinition struct {
	BlueprintLocation        *string    `json:"BlueprintLocation"`
	BlueprintServiceLocation *string    `json:"BlueprintServiceLocation"`
	Description              *string    `json:"Description"`
	LastModifiedOn           *time.Time `json:"LastModifiedOn"`
	ParameterSpec            *string    `json:"ParameterSpec"`
}
