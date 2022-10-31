package shared



type DescribeStorageVirtualMachinesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    StorageVirtualMachines []StorageVirtualMachine `json:"StorageVirtualMachines,omitempty"`
    
}

