package shared

type FargateProfileSelector struct {
	Labels    map[string]string `json:"labels"`
	Namespace *string           `json:"namespace"`
}
