package shared

import (
	"time"
)

// BehaviorModelTrainingSummary
//
//	The summary of an ML Detect behavior model.
type BehaviorModelTrainingSummary struct {
	BehaviorName                    *string          `json:"behaviorName,omitempty"`
	DatapointsCollectionPercentage  *float64         `json:"datapointsCollectionPercentage,omitempty"`
	LastModelRefreshDate            *time.Time       `json:"lastModelRefreshDate,omitempty"`
	ModelStatus                     *ModelStatusEnum `json:"modelStatus,omitempty"`
	SecurityProfileName             *string          `json:"securityProfileName,omitempty"`
	TrainingDataCollectionStartDate *time.Time       `json:"trainingDataCollectionStartDate,omitempty"`
}
