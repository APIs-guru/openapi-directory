package shared

type UpdateVolumeRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken"`
	OntapConfiguration *UpdateOntapVolumeConfiguration `json:"OntapConfiguration"`
	VolumeID           string                          `json:"VolumeId"`
}
