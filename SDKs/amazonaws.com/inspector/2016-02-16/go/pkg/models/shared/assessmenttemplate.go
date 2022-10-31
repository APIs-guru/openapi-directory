package shared

import (
"time")

type AssessmentTemplate struct {
    Arn string `json:"arn"`
    AssessmentRunCount int64 `json:"assessmentRunCount"`
    AssessmentTargetArn string `json:"assessmentTargetArn"`
    CreatedAt time.Time `json:"createdAt"`
    DurationInSeconds int64 `json:"durationInSeconds"`
    LastAssessmentRunArn *string `json:"lastAssessmentRunArn,omitempty"`
    Name string `json:"name"`
    RulesPackageArns []string `json:"rulesPackageArns"`
    UserAttributesForFindings []Attribute `json:"userAttributesForFindings"`
    
}

