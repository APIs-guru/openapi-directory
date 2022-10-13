package shared

type NamespaceResponse struct {
	Authenticated *bool   `json:"authenticated"`
	Created       *int64  `json:"created"`
	ID            *string `json:"id"`
	Modified      *int64  `json:"modified"`
	PersistLast   *bool   `json:"persistLast"`
	Persisted     *bool   `json:"persisted"`
	PushEnabled   *bool   `json:"pushEnabled"`
	TLSOnly       *bool   `json:"tlsOnly"`
}
