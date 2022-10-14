package shared

type DeleteVolumeResponse struct {
	Lifecycle     *VolumeLifecycleEnum       `json:"Lifecycle,omitempty"`
	OntapResponse *DeleteVolumeOntapResponse `json:"OntapResponse,omitempty"`
	VolumeID      *string                    `json:"VolumeId,omitempty"`
}
