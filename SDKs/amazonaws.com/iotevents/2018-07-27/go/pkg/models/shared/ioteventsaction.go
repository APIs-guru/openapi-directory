package shared



type IotEventsAction struct {
    InputName string `json:"inputName"`
    Payload *Payload `json:"payload,omitempty"`
    
}

