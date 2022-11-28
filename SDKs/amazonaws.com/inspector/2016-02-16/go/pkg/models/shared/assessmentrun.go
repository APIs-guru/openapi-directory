package shared

import (
	"time"
)

// AssessmentRun
// <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
type AssessmentRun struct {
	Arn                       string                      `json:"arn"`
	AssessmentTemplateArn     string                      `json:"assessmentTemplateArn"`
	CompletedAt               *time.Time                  `json:"completedAt,omitempty"`
	CreatedAt                 time.Time                   `json:"createdAt"`
	DataCollected             bool                        `json:"dataCollected"`
	DurationInSeconds         int64                       `json:"durationInSeconds"`
	FindingCounts             map[string]int64            `json:"findingCounts"`
	Name                      string                      `json:"name"`
	Notifications             []AssessmentRunNotification `json:"notifications"`
	RulesPackageArns          []string                    `json:"rulesPackageArns"`
	StartedAt                 *time.Time                  `json:"startedAt,omitempty"`
	State                     AssessmentRunStateEnum      `json:"state"`
	StateChangedAt            time.Time                   `json:"stateChangedAt"`
	StateChanges              []AssessmentRunStateChange  `json:"stateChanges"`
	UserAttributesForFindings []Attribute                 `json:"userAttributesForFindings"`
}
