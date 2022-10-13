package shared

type DeleteServiceRequest struct {
	Cluster *string `json:"cluster"`
	Force   *bool   `json:"force"`
	Service string  `json:"service"`
}
