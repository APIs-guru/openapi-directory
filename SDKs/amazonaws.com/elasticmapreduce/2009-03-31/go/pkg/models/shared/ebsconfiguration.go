package shared

type EbsConfiguration struct {
	EbsBlockDeviceConfigs []EbsBlockDeviceConfig `json:"EbsBlockDeviceConfigs"`
	EbsOptimized          *bool                  `json:"EbsOptimized"`
}
