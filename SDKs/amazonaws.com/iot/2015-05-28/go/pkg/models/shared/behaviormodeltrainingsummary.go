package shared

import (
	"time"
)

type BehaviorModelTrainingSummary struct {
	BehaviorName                    *string          `json:"behaviorName"`
	DatapointsCollectionPercentage  *float64         `json:"datapointsCollectionPercentage"`
	LastModelRefreshDate            *time.Time       `json:"lastModelRefreshDate"`
	ModelStatus                     *ModelStatusEnum `json:"modelStatus"`
	SecurityProfileName             *string          `json:"securityProfileName"`
	TrainingDataCollectionStartDate *time.Time       `json:"trainingDataCollectionStartDate"`
}
