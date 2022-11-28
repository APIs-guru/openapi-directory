package shared

// IotTopicPublishAction
// Information required to publish the MQTT message through the AWS IoT message broker.
type IotTopicPublishAction struct {
	MqttTopic string   `json:"mqttTopic"`
	Payload   *Payload `json:"payload,omitempty"`
}
