package shared

type MacSecKey struct {
	Ckn       *string `json:"ckn"`
	SecretArn *string `json:"secretARN"`
	StartOn   *string `json:"startOn"`
	State     *string `json:"state"`
}
