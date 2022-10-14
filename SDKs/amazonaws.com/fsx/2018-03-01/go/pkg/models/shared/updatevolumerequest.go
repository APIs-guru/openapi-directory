package shared

type UpdateVolumeRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken,omitempty"`
	OntapConfiguration *UpdateOntapVolumeConfiguration `json:"OntapConfiguration,omitempty"`
	VolumeID           string                          `json:"VolumeId"`
}
