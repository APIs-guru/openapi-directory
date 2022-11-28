package shared

// HlsContentProtection
// The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
type HlsContentProtection struct {
	InitializationVector  *string `json:"InitializationVector,omitempty"`
	Key                   *string `json:"Key,omitempty"`
	KeyMd5                *string `json:"KeyMd5,omitempty"`
	KeyStoragePolicy      *string `json:"KeyStoragePolicy,omitempty"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl,omitempty"`
	Method                *string `json:"Method,omitempty"`
}
