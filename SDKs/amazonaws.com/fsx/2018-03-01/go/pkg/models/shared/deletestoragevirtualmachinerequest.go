package shared

type DeleteStorageVirtualMachineRequest struct {
	ClientRequestToken      *string `json:"ClientRequestToken"`
	StorageVirtualMachineID string  `json:"StorageVirtualMachineId"`
}
