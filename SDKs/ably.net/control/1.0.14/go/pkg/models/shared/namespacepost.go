package shared

type NamespacePost struct {
	Authenticated *bool  `json:"authenticated"`
	ID            string `json:"id"`
	PersistLast   *bool  `json:"persistLast"`
	Persisted     *bool  `json:"persisted"`
	PushEnabled   *bool  `json:"pushEnabled"`
	TLSOnly       *bool  `json:"tlsOnly"`
}
