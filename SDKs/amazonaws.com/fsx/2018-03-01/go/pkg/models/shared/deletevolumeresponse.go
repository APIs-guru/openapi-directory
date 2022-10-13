package shared

type DeleteVolumeResponse struct {
	Lifecycle     *VolumeLifecycleEnum       `json:"Lifecycle"`
	OntapResponse *DeleteVolumeOntapResponse `json:"OntapResponse"`
	VolumeID      *string                    `json:"VolumeId"`
}
