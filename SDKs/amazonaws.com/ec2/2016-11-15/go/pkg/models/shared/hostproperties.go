package shared

// HostProperties
// Describes the properties of a Dedicated Host.
type HostProperties struct {
	Cores          *int64
	InstanceFamily *string
	InstanceType   *string
	Sockets        *int64
	TotalVCpus     *int64
}
