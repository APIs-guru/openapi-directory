package shared

type TypedAttributeValueRange struct {
	EndMode    RangeModeEnum        `json:"EndMode"`
	EndValue   *TypedAttributeValue `json:"EndValue"`
	StartMode  RangeModeEnum        `json:"StartMode"`
	StartValue *TypedAttributeValue `json:"StartValue"`
}
