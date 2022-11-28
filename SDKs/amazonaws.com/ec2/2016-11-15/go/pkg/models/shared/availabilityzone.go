package shared

// AvailabilityZone
// Describes Availability Zones, Local Zones, and Wavelength Zones.
type AvailabilityZone struct {
	GroupName          *string
	Messages           []AvailabilityZoneMessage
	NetworkBorderGroup *string
	OptInStatus        *AvailabilityZoneOptInStatusEnum
	ParentZoneID       *string
	ParentZoneName     *string
	RegionName         *string
	State              *AvailabilityZoneStateEnum
	ZoneID             *string
	ZoneName           *string
	ZoneType           *string
}
