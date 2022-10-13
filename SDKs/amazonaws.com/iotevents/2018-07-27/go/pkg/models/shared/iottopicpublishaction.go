package shared

type IotTopicPublishAction struct {
	MqttTopic string   `json:"mqttTopic"`
	Payload   *Payload `json:"payload"`
}
