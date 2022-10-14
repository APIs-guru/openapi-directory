package shared

import (
	"time"
)

type LifecyclePolicy struct {
	DateCreated      *time.Time                     `json:"DateCreated,omitempty"`
	DateModified     *time.Time                     `json:"DateModified,omitempty"`
	Description      *string                        `json:"Description,omitempty"`
	ExecutionRoleArn *string                        `json:"ExecutionRoleArn,omitempty"`
	PolicyArn        *string                        `json:"PolicyArn,omitempty"`
	PolicyDetails    *PolicyDetails                 `json:"PolicyDetails,omitempty"`
	PolicyID         *string                        `json:"PolicyId,omitempty"`
	State            *GettablePolicyStateValuesEnum `json:"State,omitempty"`
	StatusMessage    *string                        `json:"StatusMessage,omitempty"`
	Tags             map[string]string              `json:"Tags,omitempty"`
}
