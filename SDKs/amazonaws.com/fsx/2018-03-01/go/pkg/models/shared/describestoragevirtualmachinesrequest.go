package shared



type DescribeStorageVirtualMachinesRequest struct {
    Filters []StorageVirtualMachineFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StorageVirtualMachineIds []string `json:"StorageVirtualMachineIds,omitempty"`
    
}

