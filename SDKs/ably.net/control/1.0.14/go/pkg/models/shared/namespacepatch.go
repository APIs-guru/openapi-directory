package shared

type NamespacePatch struct {
	Authenticated *bool `json:"authenticated"`
	PersistLast   *bool `json:"persistLast"`
	Persisted     *bool `json:"persisted"`
	PushEnabled   *bool `json:"pushEnabled"`
	TLSOnly       *bool `json:"tlsOnly"`
}
