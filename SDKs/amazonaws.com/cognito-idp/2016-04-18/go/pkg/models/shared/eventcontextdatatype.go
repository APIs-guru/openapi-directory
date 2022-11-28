package shared

// EventContextDataType
// Specifies the user context data captured at the time of an event request.
type EventContextDataType struct {
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	DeviceName *string `json:"DeviceName,omitempty"`
	IPAddress  *string `json:"IpAddress,omitempty"`
	Timezone   *string `json:"Timezone,omitempty"`
}
