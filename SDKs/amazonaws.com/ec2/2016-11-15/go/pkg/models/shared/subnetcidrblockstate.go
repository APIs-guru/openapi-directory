package shared

// SubnetCidrBlockState
// Describes the state of a CIDR block.
type SubnetCidrBlockState struct {
	State         *SubnetCidrBlockStateCodeEnum
	StatusMessage *string
}
