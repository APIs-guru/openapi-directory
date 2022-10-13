package shared

import (
	"time"
)

type AssessmentRun struct {
	Arn                       string                      `json:"arn"`
	AssessmentTemplateArn     string                      `json:"assessmentTemplateArn"`
	CompletedAt               *time.Time                  `json:"completedAt"`
	CreatedAt                 time.Time                   `json:"createdAt"`
	DataCollected             bool                        `json:"dataCollected"`
	DurationInSeconds         int64                       `json:"durationInSeconds"`
	FindingCounts             map[string]int64            `json:"findingCounts"`
	Name                      string                      `json:"name"`
	Notifications             []AssessmentRunNotification `json:"notifications"`
	RulesPackageArns          []string                    `json:"rulesPackageArns"`
	StartedAt                 *time.Time                  `json:"startedAt"`
	State                     AssessmentRunStateEnum      `json:"state"`
	StateChangedAt            time.Time                   `json:"stateChangedAt"`
	StateChanges              []AssessmentRunStateChange  `json:"stateChanges"`
	UserAttributesForFindings []Attribute                 `json:"userAttributesForFindings"`
}
