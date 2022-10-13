package shared

type DiskIopsConfiguration struct {
	Iops *int64                         `json:"Iops"`
	Mode *DiskIopsConfigurationModeEnum `json:"Mode"`
}
