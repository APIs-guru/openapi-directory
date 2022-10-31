package shared

import (
"time")

type LastActiveDefinition struct {
    BlueprintLocation *string `json:"BlueprintLocation,omitempty"`
    BlueprintServiceLocation *string `json:"BlueprintServiceLocation,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastModifiedOn *time.Time `json:"LastModifiedOn,omitempty"`
    ParameterSpec *string `json:"ParameterSpec,omitempty"`
    
}

