package shared

import (
"time")

type GenericRevisionInfo struct {
    DeploymentGroups []string `json:"deploymentGroups,omitempty"`
    Description *string `json:"description,omitempty"`
    FirstUsedTime *time.Time `json:"firstUsedTime,omitempty"`
    LastUsedTime *time.Time `json:"lastUsedTime,omitempty"`
    RegisterTime *time.Time `json:"registerTime,omitempty"`
    
}

