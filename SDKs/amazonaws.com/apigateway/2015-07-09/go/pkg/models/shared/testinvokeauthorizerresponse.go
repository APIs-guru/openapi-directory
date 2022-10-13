package shared

type TestInvokeAuthorizerResponse struct {
	Authorization map[string][]string `json:"authorization"`
	Claims        map[string]string   `json:"claims"`
	ClientStatus  *int64              `json:"clientStatus"`
	Latency       *int64              `json:"latency"`
	Log           *string             `json:"log"`
	Policy        *string             `json:"policy"`
	PrincipalID   *string             `json:"principalId"`
}
