package shared

type StorageVirtualMachineFilter struct {
	Name   *StorageVirtualMachineFilterNameEnum `json:"Name"`
	Values []string                             `json:"Values"`
}
