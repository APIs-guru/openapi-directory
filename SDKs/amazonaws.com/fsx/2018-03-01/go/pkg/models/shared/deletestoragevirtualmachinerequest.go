package shared

type DeleteStorageVirtualMachineRequest struct {
	ClientRequestToken      *string `json:"ClientRequestToken,omitempty"`
	StorageVirtualMachineID string  `json:"StorageVirtualMachineId"`
}
