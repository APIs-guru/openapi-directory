package shared

// TrafficMirrorSession
// Describes a Traffic Mirror session.
type TrafficMirrorSession struct {
	Description            *string
	NetworkInterfaceID     *string
	OwnerID                *string
	PacketLength           *int64
	SessionNumber          *int64
	Tags                   []Tag
	TrafficMirrorFilterID  *string
	TrafficMirrorSessionID *string
	TrafficMirrorTargetID  *string
	VirtualNetworkID       *int64
}
