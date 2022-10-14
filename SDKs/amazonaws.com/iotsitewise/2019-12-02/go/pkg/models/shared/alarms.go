package shared

type Alarms struct {
	AlarmRoleArn          string  `json:"alarmRoleArn"`
	NotificationLambdaArn *string `json:"notificationLambdaArn,omitempty"`
}
