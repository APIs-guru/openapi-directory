package shared

type DescribeUsageReportSubscriptionsResult struct {
	NextToken                *string                   `json:"NextToken"`
	UsageReportSubscriptions []UsageReportSubscription `json:"UsageReportSubscriptions"`
}
