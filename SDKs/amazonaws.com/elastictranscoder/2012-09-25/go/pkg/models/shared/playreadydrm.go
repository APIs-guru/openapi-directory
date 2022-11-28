package shared

// PlayReadyDrm
// <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
type PlayReadyDrm struct {
	Format                *string `json:"Format,omitempty"`
	InitializationVector  *string `json:"InitializationVector,omitempty"`
	Key                   *string `json:"Key,omitempty"`
	KeyID                 *string `json:"KeyId,omitempty"`
	KeyMd5                *string `json:"KeyMd5,omitempty"`
	LicenseAcquisitionURL *string `json:"LicenseAcquisitionUrl,omitempty"`
}
