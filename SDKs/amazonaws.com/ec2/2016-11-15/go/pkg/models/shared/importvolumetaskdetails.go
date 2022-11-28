package shared

// ImportVolumeTaskDetails
// Describes an import volume task.
type ImportVolumeTaskDetails struct {
	AvailabilityZone *string
	BytesConverted   *int64
	Description      *string
	Image            *DiskImageDescription
	Volume           *DiskImageVolumeDescription
}
