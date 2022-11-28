package shared

// SmbMountOptions
// Represents the mount options that are available for DataSync to access an SMB location.
type SmbMountOptions struct {
	Version *SmbVersionEnum `json:"Version,omitempty"`
}
