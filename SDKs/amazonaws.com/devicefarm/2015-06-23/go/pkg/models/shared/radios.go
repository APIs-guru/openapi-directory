package shared



type Radios struct {
    Bluetooth *bool `json:"bluetooth,omitempty"`
    Gps *bool `json:"gps,omitempty"`
    Nfc *bool `json:"nfc,omitempty"`
    Wifi *bool `json:"wifi,omitempty"`
    
}

