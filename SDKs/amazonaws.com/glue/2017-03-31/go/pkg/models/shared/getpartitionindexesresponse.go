package shared

type GetPartitionIndexesResponse struct {
	NextToken                    *string                    `json:"NextToken"`
	PartitionIndexDescriptorList []PartitionIndexDescriptor `json:"PartitionIndexDescriptorList"`
}
