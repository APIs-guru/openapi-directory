package shared

type EbsConfiguration struct {
	EbsBlockDeviceConfigs []EbsBlockDeviceConfig `json:"EbsBlockDeviceConfigs,omitempty"`
	EbsOptimized          *bool                  `json:"EbsOptimized,omitempty"`
}
