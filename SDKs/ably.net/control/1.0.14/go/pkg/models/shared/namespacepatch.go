package shared

type NamespacePatch struct {
	Authenticated *bool `json:"authenticated,omitempty"`
	PersistLast   *bool `json:"persistLast,omitempty"`
	Persisted     *bool `json:"persisted,omitempty"`
	PushEnabled   *bool `json:"pushEnabled,omitempty"`
	TLSOnly       *bool `json:"tlsOnly,omitempty"`
}
