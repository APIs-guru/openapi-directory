package shared

type GetNotificationChannelResponse struct {
	SnsRoleName *string `json:"SnsRoleName"`
	SnsTopicArn *string `json:"SnsTopicArn"`
}
