package shared

type PutNotificationChannelRequest struct {
	SnsRoleName string `json:"SnsRoleName"`
	SnsTopicArn string `json:"SnsTopicArn"`
}
