package shared

type DevicePoolCompatibilityResult struct {
	Compatible              *bool                    `json:"compatible"`
	Device                  *Device                  `json:"device"`
	IncompatibilityMessages []IncompatibilityMessage `json:"incompatibilityMessages"`
}
