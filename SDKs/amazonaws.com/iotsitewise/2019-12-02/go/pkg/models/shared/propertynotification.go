package shared

// PropertyNotification
// Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.
type PropertyNotification struct {
	State PropertyNotificationStateEnum `json:"state"`
	Topic string                        `json:"topic"`
}
