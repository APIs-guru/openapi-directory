package shared

type UpdateStorageVirtualMachineRequest struct {
	ActiveDirectoryConfiguration *UpdateSvmActiveDirectoryConfiguration `json:"ActiveDirectoryConfiguration,omitempty"`
	ClientRequestToken           *string                                `json:"ClientRequestToken,omitempty"`
	StorageVirtualMachineID      string                                 `json:"StorageVirtualMachineId"`
	SvmAdminPassword             *string                                `json:"SvmAdminPassword,omitempty"`
}
