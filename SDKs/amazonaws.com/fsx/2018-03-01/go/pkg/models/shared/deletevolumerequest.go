package shared



type DeleteVolumeRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    OntapConfiguration *DeleteVolumeOntapConfiguration `json:"OntapConfiguration,omitempty"`
    VolumeID string `json:"VolumeId"`
    
}

