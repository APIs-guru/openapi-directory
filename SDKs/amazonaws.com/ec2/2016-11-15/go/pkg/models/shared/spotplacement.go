package shared

// SpotPlacement
// Describes Spot Instance placement.
type SpotPlacement struct {
	AvailabilityZone *string
	GroupName        *string
	Tenancy          *TenancyEnum
}
