package shared

type DeleteHsmRequest struct {
	ClusterID string  `json:"ClusterId"`
	EniID     *string `json:"EniId,omitempty"`
	EniIP     *string `json:"EniIp,omitempty"`
	HsmID     *string `json:"HsmId,omitempty"`
}
