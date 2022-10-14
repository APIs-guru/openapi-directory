package shared

type TypedAttributeValueRange struct {
	EndMode    RangeModeEnum        `json:"EndMode"`
	EndValue   *TypedAttributeValue `json:"EndValue,omitempty"`
	StartMode  RangeModeEnum        `json:"StartMode"`
	StartValue *TypedAttributeValue `json:"StartValue,omitempty"`
}
