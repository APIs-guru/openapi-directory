package shared

type Notification struct {
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
	NotificationState  *NotificationStateEnum `json:"NotificationState"`
	NotificationType   NotificationTypeEnum   `json:"NotificationType"`
	Threshold          float64                `json:"Threshold"`
	ThresholdType      *ThresholdTypeEnum     `json:"ThresholdType"`
}
