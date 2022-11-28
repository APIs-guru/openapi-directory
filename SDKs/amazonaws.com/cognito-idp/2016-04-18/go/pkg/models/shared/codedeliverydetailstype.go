package shared

// CodeDeliveryDetailsType
// The code delivery details being returned from the server.
type CodeDeliveryDetailsType struct {
	AttributeName  *string                 `json:"AttributeName,omitempty"`
	DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium,omitempty"`
	Destination    *string                 `json:"Destination,omitempty"`
}
