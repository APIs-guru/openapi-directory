package shared

// ImportInstanceVolumeDetailItem
// Describes an import volume task.
type ImportInstanceVolumeDetailItem struct {
	AvailabilityZone *string
	BytesConverted   *int64
	Description      *string
	Image            *DiskImageDescription
	Status           *string
	StatusMessage    *string
	Volume           *DiskImageVolumeDescription
}
