package shared

type DescribeStorageVirtualMachinesRequest struct {
	Filters                  []StorageVirtualMachineFilter `json:"Filters"`
	MaxResults               *int64                        `json:"MaxResults"`
	NextToken                *string                       `json:"NextToken"`
	StorageVirtualMachineIds []string                      `json:"StorageVirtualMachineIds"`
}
