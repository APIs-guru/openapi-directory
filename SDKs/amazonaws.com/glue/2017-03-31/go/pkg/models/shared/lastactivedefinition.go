package shared

import (
	"time"
)

// LastActiveDefinition
// When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
type LastActiveDefinition struct {
	BlueprintLocation        *string    `json:"BlueprintLocation,omitempty"`
	BlueprintServiceLocation *string    `json:"BlueprintServiceLocation,omitempty"`
	Description              *string    `json:"Description,omitempty"`
	LastModifiedOn           *time.Time `json:"LastModifiedOn,omitempty"`
	ParameterSpec            *string    `json:"ParameterSpec,omitempty"`
}
