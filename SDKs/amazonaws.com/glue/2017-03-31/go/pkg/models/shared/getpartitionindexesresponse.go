package shared

type GetPartitionIndexesResponse struct {
	NextToken                    *string                    `json:"NextToken,omitempty"`
	PartitionIndexDescriptorList []PartitionIndexDescriptor `json:"PartitionIndexDescriptorList,omitempty"`
}
