package shared

// DiskIopsConfiguration
// The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).
type DiskIopsConfiguration struct {
	Iops *int64                         `json:"Iops,omitempty"`
	Mode *DiskIopsConfigurationModeEnum `json:"Mode,omitempty"`
}
