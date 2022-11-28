package shared

// Notification
// <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
type Notification struct {
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
	NotificationState  *NotificationStateEnum `json:"NotificationState,omitempty"`
	NotificationType   NotificationTypeEnum   `json:"NotificationType"`
	Threshold          float64                `json:"Threshold"`
	ThresholdType      *ThresholdTypeEnum     `json:"ThresholdType,omitempty"`
}
