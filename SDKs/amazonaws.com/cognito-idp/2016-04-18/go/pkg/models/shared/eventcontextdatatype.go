package shared

type EventContextDataType struct {
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	DeviceName *string `json:"DeviceName"`
	IPAddress  *string `json:"IpAddress"`
	Timezone   *string `json:"Timezone"`
}
