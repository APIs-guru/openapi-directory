package shared

type HlsContentProtection struct {
	InitializationVector  *string `json:"InitializationVector,omitempty"`
	Key                   *string `json:"Key,omitempty"`
	KeyMd5                *string `json:"KeyMd5,omitempty"`
	KeyStoragePolicy      *string `json:"KeyStoragePolicy,omitempty"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl,omitempty"`
	Method                *string `json:"Method,omitempty"`
}
