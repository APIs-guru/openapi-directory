package shared

type DeleteVolumeRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken"`
	OntapConfiguration *DeleteVolumeOntapConfiguration `json:"OntapConfiguration"`
	VolumeID           string                          `json:"VolumeId"`
}
