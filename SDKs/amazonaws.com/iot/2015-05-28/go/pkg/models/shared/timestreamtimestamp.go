package shared

// TimestreamTimestamp
// Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
type TimestreamTimestamp struct {
	Unit  string `json:"unit"`
	Value string `json:"value"`
}
