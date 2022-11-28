package shared

// OutlierDetection
// An object that represents the outlier detection for a virtual node's listener.
type OutlierDetection struct {
	BaseEjectionDuration Duration `json:"baseEjectionDuration"`
	Interval             Duration `json:"interval"`
	MaxEjectionPercent   int64    `json:"maxEjectionPercent"`
	MaxServerErrors      int64    `json:"maxServerErrors"`
}
