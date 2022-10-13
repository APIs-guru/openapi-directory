package shared

type ListTargetsForPolicyResponse struct {
	NextMarker *string  `json:"nextMarker"`
	Targets    []string `json:"targets"`
}
