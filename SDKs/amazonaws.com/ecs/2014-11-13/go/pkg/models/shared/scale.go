package shared

type Scale struct {
	Unit  *ScaleUnitEnum `json:"unit"`
	Value *float64       `json:"value"`
}
