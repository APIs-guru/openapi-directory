package shared

// MonitoringSubscription
// A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
type MonitoringSubscription struct {
	RealtimeMetricsSubscriptionConfig *RealtimeMetricsSubscriptionConfig
}
