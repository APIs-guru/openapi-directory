package shared

// SubnetCidrReservation
// Describes a subnet CIDR reservation.
type SubnetCidrReservation struct {
	Cidr                    *string
	Description             *string
	OwnerID                 *string
	ReservationType         *SubnetCidrReservationTypeEnum
	SubnetCidrReservationID *string
	SubnetID                *string
	Tags                    []Tag
}
