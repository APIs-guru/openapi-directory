package shared

import (
	"time"
)

// AssessmentTemplate
// Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
type AssessmentTemplate struct {
	Arn                       string      `json:"arn"`
	AssessmentRunCount        int64       `json:"assessmentRunCount"`
	AssessmentTargetArn       string      `json:"assessmentTargetArn"`
	CreatedAt                 time.Time   `json:"createdAt"`
	DurationInSeconds         int64       `json:"durationInSeconds"`
	LastAssessmentRunArn      *string     `json:"lastAssessmentRunArn,omitempty"`
	Name                      string      `json:"name"`
	RulesPackageArns          []string    `json:"rulesPackageArns"`
	UserAttributesForFindings []Attribute `json:"userAttributesForFindings"`
}
