package shared

// Radios
// Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
type Radios struct {
	Bluetooth *bool `json:"bluetooth,omitempty"`
	Gps       *bool `json:"gps,omitempty"`
	Nfc       *bool `json:"nfc,omitempty"`
	Wifi      *bool `json:"wifi,omitempty"`
}
