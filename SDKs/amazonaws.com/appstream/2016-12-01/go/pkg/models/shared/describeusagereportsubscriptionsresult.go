package shared

type DescribeUsageReportSubscriptionsResult struct {
	NextToken                *string                   `json:"NextToken,omitempty"`
	UsageReportSubscriptions []UsageReportSubscription `json:"UsageReportSubscriptions,omitempty"`
}
