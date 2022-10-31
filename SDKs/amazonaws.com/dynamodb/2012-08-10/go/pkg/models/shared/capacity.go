package shared

type Capacity struct {
	CapacityUnits      *float64 `json:"CapacityUnits,omitempty"`
	ReadCapacityUnits  *float64 `json:"ReadCapacityUnits,omitempty"`
	WriteCapacityUnits *float64 `json:"WriteCapacityUnits,omitempty"`
}
