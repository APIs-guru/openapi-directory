package shared

type DeleteHsmRequest struct {
	ClusterID string  `json:"ClusterId"`
	EniID     *string `json:"EniId"`
	EniIP     *string `json:"EniIp"`
	HsmID     *string `json:"HsmId"`
}
