package shared

type PropertyType struct {
	Attribute   *Attribute   `json:"attribute"`
	Measurement *Measurement `json:"measurement"`
	Metric      *Metric      `json:"metric"`
	Transform   *Transform   `json:"transform"`
}
