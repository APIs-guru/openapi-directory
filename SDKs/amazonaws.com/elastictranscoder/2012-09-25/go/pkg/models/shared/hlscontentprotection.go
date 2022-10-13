package shared

type HlsContentProtection struct {
	InitializationVector  *string `json:"InitializationVector"`
	Key                   *string `json:"Key"`
	KeyMd5                *string `json:"KeyMd5"`
	KeyStoragePolicy      *string `json:"KeyStoragePolicy"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl"`
	Method                *string `json:"Method"`
}
