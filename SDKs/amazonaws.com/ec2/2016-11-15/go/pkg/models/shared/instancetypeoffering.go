package shared

// InstanceTypeOffering
// The instance types offered.
type InstanceTypeOffering struct {
	InstanceType *InstanceTypeEnum
	Location     *string
	LocationType *LocationTypeEnum
}
