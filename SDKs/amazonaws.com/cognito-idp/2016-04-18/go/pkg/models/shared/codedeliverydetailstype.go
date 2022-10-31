package shared



type CodeDeliveryDetailsType struct {
    AttributeName *string `json:"AttributeName,omitempty"`
    DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium,omitempty"`
    Destination *string `json:"Destination,omitempty"`
    
}

