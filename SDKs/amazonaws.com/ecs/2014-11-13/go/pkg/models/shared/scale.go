package shared



type Scale struct {
    Unit *ScaleUnitEnum `json:"unit,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

