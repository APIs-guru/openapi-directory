package shared



type TumblingWindow struct {
    Interval string `json:"interval"`
    Offset *string `json:"offset,omitempty"`
    
}

