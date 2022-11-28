package shared

import (
	"time"
)

// AssessmentTarget
// Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
type AssessmentTarget struct {
	Arn              string    `json:"arn"`
	CreatedAt        time.Time `json:"createdAt"`
	Name             string    `json:"name"`
	ResourceGroupArn *string   `json:"resourceGroupArn,omitempty"`
	UpdatedAt        time.Time `json:"updatedAt"`
}
