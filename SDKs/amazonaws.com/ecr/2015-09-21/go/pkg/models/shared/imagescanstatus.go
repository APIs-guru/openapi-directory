package shared

type ImageScanStatus struct {
	Description *string         `json:"description"`
	Status      *ScanStatusEnum `json:"status"`
}
