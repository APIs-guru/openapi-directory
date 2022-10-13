package shared

type DescribeStorageVirtualMachinesResponse struct {
	NextToken              *string                 `json:"NextToken"`
	StorageVirtualMachines []StorageVirtualMachine `json:"StorageVirtualMachines"`
}
