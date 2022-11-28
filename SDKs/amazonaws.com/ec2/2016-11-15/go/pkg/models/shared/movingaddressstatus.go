package shared

// MovingAddressStatus
// Describes the status of a moving Elastic IP address.
type MovingAddressStatus struct {
	MoveStatus *MoveStatusEnum
	PublicIP   *string
}
