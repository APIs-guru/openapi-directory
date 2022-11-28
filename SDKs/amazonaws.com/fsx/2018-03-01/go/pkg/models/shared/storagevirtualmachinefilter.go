package shared

// StorageVirtualMachineFilter
// A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.
type StorageVirtualMachineFilter struct {
	Name   *StorageVirtualMachineFilterNameEnum `json:"Name,omitempty"`
	Values []string                             `json:"Values,omitempty"`
}
