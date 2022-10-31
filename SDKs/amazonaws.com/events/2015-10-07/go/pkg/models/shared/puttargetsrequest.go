package shared



type PutTargetsRequest struct {
    EventBusName *string `json:"EventBusName,omitempty"`
    Rule string `json:"Rule"`
    Targets []Target `json:"Targets"`
    
}

