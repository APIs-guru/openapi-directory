package shared

type Deserializer struct {
	HiveJSONSerDe  *HiveJSONSerDe  `json:"HiveJsonSerDe"`
	OpenXJSONSerDe *OpenXJSONSerDe `json:"OpenXJsonSerDe"`
}
