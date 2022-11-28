package shared

// NfsMountOptions
// Represents the mount options that are available for DataSync to access an NFS location.
type NfsMountOptions struct {
	Version *NfsVersionEnum `json:"Version,omitempty"`
}
