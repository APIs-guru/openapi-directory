package shared

// CPU
// Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
type CPU struct {
	Architecture *string  `json:"architecture,omitempty"`
	Clock        *float64 `json:"clock,omitempty"`
	Frequency    *string  `json:"frequency,omitempty"`
}
