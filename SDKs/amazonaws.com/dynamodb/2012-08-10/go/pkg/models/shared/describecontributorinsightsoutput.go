package shared

import (
	"time"
)

type DescribeContributorInsightsOutput struct {
	ContributorInsightsRuleList []string                       `json:"ContributorInsightsRuleList"`
	ContributorInsightsStatus   *ContributorInsightsStatusEnum `json:"ContributorInsightsStatus"`
	FailureException            *FailureException              `json:"FailureException"`
	IndexName                   *string                        `json:"IndexName"`
	LastUpdateDateTime          *time.Time                     `json:"LastUpdateDateTime"`
	TableName                   *string                        `json:"TableName"`
}
