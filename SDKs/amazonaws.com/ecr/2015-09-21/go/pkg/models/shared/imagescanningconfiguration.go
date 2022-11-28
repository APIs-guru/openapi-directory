package shared

// ImageScanningConfiguration
// The image scanning configuration for a repository.
type ImageScanningConfiguration struct {
	ScanOnPush *bool `json:"scanOnPush,omitempty"`
}
