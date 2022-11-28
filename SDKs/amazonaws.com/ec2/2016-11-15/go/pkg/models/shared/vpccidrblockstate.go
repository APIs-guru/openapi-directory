package shared

// VpcCidrBlockState
// Describes the state of a CIDR block.
type VpcCidrBlockState struct {
	State         *VpcCidrBlockStateCodeEnum
	StatusMessage *string
}
