package shared



type Route struct {
    Destination *string `json:"Destination,omitempty"`
    DestinationType *DestinationTypeEnum `json:"DestinationType,omitempty"`
    Target *string `json:"Target,omitempty"`
    TargetType *TargetTypeEnum `json:"TargetType,omitempty"`
    
}

