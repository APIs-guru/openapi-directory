package shared



type DetectorState struct {
    StateName string `json:"stateName"`
    Timers []Timer `json:"timers"`
    Variables []Variable `json:"variables"`
    
}

