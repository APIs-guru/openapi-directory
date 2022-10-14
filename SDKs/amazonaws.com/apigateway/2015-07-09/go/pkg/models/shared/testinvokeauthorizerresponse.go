package shared

type TestInvokeAuthorizerResponse struct {
	Authorization map[string][]string `json:"authorization,omitempty"`
	Claims        map[string]string   `json:"claims,omitempty"`
	ClientStatus  *int64              `json:"clientStatus,omitempty"`
	Latency       *int64              `json:"latency,omitempty"`
	Log           *string             `json:"log,omitempty"`
	Policy        *string             `json:"policy,omitempty"`
	PrincipalID   *string             `json:"principalId,omitempty"`
}
