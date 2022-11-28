package shared

// VpcPeeringConnectionStateReason
// Describes the status of a VPC peering connection.
type VpcPeeringConnectionStateReason struct {
	Code    *VpcPeeringConnectionStateReasonCodeEnum
	Message *string
}
