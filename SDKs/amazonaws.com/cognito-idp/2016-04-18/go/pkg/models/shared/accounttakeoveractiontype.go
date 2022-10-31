package shared



type AccountTakeoverActionType struct {
    EventAction AccountTakeoverEventActionTypeEnum `json:"EventAction"`
    Notify bool `json:"Notify"`
    
}

