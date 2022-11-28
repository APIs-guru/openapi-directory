package shared

type DescribeVpcEndpointConnectionNotificationsResult struct {
	ConnectionNotificationSet []ConnectionNotification
	NextToken                 *string
}
