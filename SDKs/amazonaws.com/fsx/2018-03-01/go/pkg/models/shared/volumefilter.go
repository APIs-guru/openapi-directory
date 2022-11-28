package shared

// VolumeFilter
// A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP volumes. You can use multiple filters to return results that meet all applied filter requirements.
type VolumeFilter struct {
	Name   *VolumeFilterNameEnum `json:"Name,omitempty"`
	Values []string              `json:"Values,omitempty"`
}
