package shared

// TypedAttributeValueRange
// A range of attribute values. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters">Range Filters</a>.
type TypedAttributeValueRange struct {
	EndMode    RangeModeEnum        `json:"EndMode"`
	EndValue   *TypedAttributeValue `json:"EndValue,omitempty"`
	StartMode  RangeModeEnum        `json:"StartMode"`
	StartValue *TypedAttributeValue `json:"StartValue,omitempty"`
}
