package shared

type DescribeNotificationConfigurationsAnswer struct {
	NextToken                  *string
	NotificationConfigurations []NotificationConfiguration
}
