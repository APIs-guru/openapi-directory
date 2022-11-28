package shared

// ImageScanStatus
// The current status of an image scan.
type ImageScanStatus struct {
	Description *string         `json:"description,omitempty"`
	Status      *ScanStatusEnum `json:"status,omitempty"`
}
