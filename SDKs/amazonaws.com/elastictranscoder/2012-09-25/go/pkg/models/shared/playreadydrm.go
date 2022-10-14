package shared

type PlayReadyDrm struct {
	Format                *string `json:"Format,omitempty"`
	InitializationVector  *string `json:"InitializationVector,omitempty"`
	Key                   *string `json:"Key,omitempty"`
	KeyID                 *string `json:"KeyId,omitempty"`
	KeyMd5                *string `json:"KeyMd5,omitempty"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl,omitempty"`
}
