package shared

// CoipAddressUsage
// Describes address usage for a customer-owned address pool.
type CoipAddressUsage struct {
	AllocationID *string
	AwsAccountID *string
	AwsService   *string
	CoIP         *string
}
