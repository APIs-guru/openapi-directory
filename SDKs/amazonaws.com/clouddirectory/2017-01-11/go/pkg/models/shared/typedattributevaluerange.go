package shared

// TypedAttributeValueRange
// A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
type TypedAttributeValueRange struct {
	EndMode    RangeModeEnum        `json:"EndMode"`
	EndValue   *TypedAttributeValue `json:"EndValue,omitempty"`
	StartMode  RangeModeEnum        `json:"StartMode"`
	StartValue *TypedAttributeValue `json:"StartValue,omitempty"`
}
