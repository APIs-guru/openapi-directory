package shared

type DeleteStorageVirtualMachineResponse struct {
	Lifecycle               *StorageVirtualMachineLifecycleEnum `json:"Lifecycle"`
	StorageVirtualMachineID *string                             `json:"StorageVirtualMachineId"`
}
