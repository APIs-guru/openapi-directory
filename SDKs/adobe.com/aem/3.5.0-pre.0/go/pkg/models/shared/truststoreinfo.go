package shared

type TruststoreInfo struct {
	Aliases []TruststoreItems `json:"aliases"`
	Exists  *bool             `json:"exists"`
}
