package shared

import (
	"time"
)

type LifecyclePolicy struct {
	DateCreated      *time.Time                     `json:"DateCreated"`
	DateModified     *time.Time                     `json:"DateModified"`
	Description      *string                        `json:"Description"`
	ExecutionRoleArn *string                        `json:"ExecutionRoleArn"`
	PolicyArn        *string                        `json:"PolicyArn"`
	PolicyDetails    *PolicyDetails                 `json:"PolicyDetails"`
	PolicyID         *string                        `json:"PolicyId"`
	State            *GettablePolicyStateValuesEnum `json:"State"`
	StatusMessage    *string                        `json:"StatusMessage"`
	Tags             map[string]string              `json:"Tags"`
}
