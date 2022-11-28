package shared

// ConnectionNotification
// Describes a connection notification for a VPC endpoint or VPC endpoint service.
type ConnectionNotification struct {
	ConnectionEvents            []string
	ConnectionNotificationArn   *string
	ConnectionNotificationID    *string
	ConnectionNotificationState *ConnectionNotificationStateEnum
	ConnectionNotificationType  *ConnectionNotificationTypeEnum
	ServiceID                   *string
	VpcEndpointID               *string
}
