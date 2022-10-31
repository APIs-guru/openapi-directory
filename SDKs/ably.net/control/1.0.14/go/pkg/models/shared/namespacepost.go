package shared



type NamespacePost struct {
    Authenticated *bool `json:"authenticated,omitempty"`
    ID string `json:"id"`
    PersistLast *bool `json:"persistLast,omitempty"`
    Persisted *bool `json:"persisted,omitempty"`
    PushEnabled *bool `json:"pushEnabled,omitempty"`
    TLSOnly *bool `json:"tlsOnly,omitempty"`
    
}

