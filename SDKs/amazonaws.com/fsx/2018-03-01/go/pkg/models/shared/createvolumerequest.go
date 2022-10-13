package shared

type CreateVolumeRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken"`
	Name               string                          `json:"Name"`
	OntapConfiguration *CreateOntapVolumeConfiguration `json:"OntapConfiguration"`
	Tags               []Tag                           `json:"Tags"`
	VolumeType         VolumeTypeEnum                  `json:"VolumeType"`
}
