package shared



type CreateVolumeRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Name string `json:"Name"`
    OntapConfiguration *CreateOntapVolumeConfiguration `json:"OntapConfiguration,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    VolumeType VolumeTypeEnum `json:"VolumeType"`
    
}

