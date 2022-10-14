package shared

type DiskIopsConfiguration struct {
	Iops *int64                         `json:"Iops,omitempty"`
	Mode *DiskIopsConfigurationModeEnum `json:"Mode,omitempty"`
}
