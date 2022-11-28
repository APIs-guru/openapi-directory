package shared

// EbsConfiguration
// The Amazon EBS configuration of a cluster instance.
type EbsConfiguration struct {
	EbsBlockDeviceConfigs []EbsBlockDeviceConfig `json:"EbsBlockDeviceConfigs,omitempty"`
	EbsOptimized          *bool                  `json:"EbsOptimized,omitempty"`
}
