package shared

import (
"time")

type DescribeContributorInsightsOutput struct {
    ContributorInsightsRuleList []string `json:"ContributorInsightsRuleList,omitempty"`
    ContributorInsightsStatus *ContributorInsightsStatusEnum `json:"ContributorInsightsStatus,omitempty"`
    FailureException *FailureException `json:"FailureException,omitempty"`
    IndexName *string `json:"IndexName,omitempty"`
    LastUpdateDateTime *time.Time `json:"LastUpdateDateTime,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

