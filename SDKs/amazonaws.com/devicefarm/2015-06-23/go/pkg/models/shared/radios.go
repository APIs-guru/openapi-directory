package shared

type Radios struct {
	Bluetooth *bool `json:"bluetooth"`
	Gps       *bool `json:"gps"`
	Nfc       *bool `json:"nfc"`
	Wifi      *bool `json:"wifi"`
}
