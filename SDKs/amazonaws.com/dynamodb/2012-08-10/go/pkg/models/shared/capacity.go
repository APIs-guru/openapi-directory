package shared

type Capacity struct {
	CapacityUnits      *float64 `json:"CapacityUnits"`
	ReadCapacityUnits  *float64 `json:"ReadCapacityUnits"`
	WriteCapacityUnits *float64 `json:"WriteCapacityUnits"`
}
