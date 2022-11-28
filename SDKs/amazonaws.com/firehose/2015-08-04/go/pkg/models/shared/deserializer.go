package shared

// Deserializer
// The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.
type Deserializer struct {
	HiveJSONSerDe  *HiveJSONSerDe  `json:"HiveJsonSerDe,omitempty"`
	OpenXJSONSerDe *OpenXJSONSerDe `json:"OpenXJsonSerDe,omitempty"`
}
