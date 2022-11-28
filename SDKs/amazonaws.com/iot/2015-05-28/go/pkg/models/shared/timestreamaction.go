package shared

// TimestreamAction
// The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation.
type TimestreamAction struct {
	DatabaseName string                `json:"databaseName"`
	Dimensions   []TimestreamDimension `json:"dimensions"`
	RoleArn      string                `json:"roleArn"`
	TableName    string                `json:"tableName"`
	Timestamp    *TimestreamTimestamp  `json:"timestamp,omitempty"`
}
