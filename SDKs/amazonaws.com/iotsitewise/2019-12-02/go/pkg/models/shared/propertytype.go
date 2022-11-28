package shared

// PropertyType
// Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
type PropertyType struct {
	Attribute   *Attribute   `json:"attribute,omitempty"`
	Measurement *Measurement `json:"measurement,omitempty"`
	Metric      *Metric      `json:"metric,omitempty"`
	Transform   *Transform   `json:"transform,omitempty"`
}
