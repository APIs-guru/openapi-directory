package shared

type PlayReadyDrm struct {
	Format                *string `json:"Format"`
	InitializationVector  *string `json:"InitializationVector"`
	Key                   *string `json:"Key"`
	KeyID                 *string `json:"KeyId"`
	KeyMd5                *string `json:"KeyMd5"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl"`
}
