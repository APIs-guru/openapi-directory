package shared



type EventParameters struct {
    DescriptionRegex string `json:"DescriptionRegex"`
    EventType EventTypeValuesEnum `json:"EventType"`
    SnapshotOwner []string `json:"SnapshotOwner"`
    
}

