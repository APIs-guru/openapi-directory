package shared

type DeleteStorageVirtualMachineResponse struct {
	Lifecycle               *StorageVirtualMachineLifecycleEnum `json:"Lifecycle,omitempty"`
	StorageVirtualMachineID *string                             `json:"StorageVirtualMachineId,omitempty"`
}
