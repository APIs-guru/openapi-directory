package shared

// DiskImageDescription
// Describes a disk image.
type DiskImageDescription struct {
	Checksum          *string
	Format            *DiskImageFormatEnum
	ImportManifestURL *string
	Size              *int64
}
