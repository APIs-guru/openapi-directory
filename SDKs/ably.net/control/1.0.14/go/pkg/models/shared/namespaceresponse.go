package shared



type NamespaceResponse struct {
    Authenticated *bool `json:"authenticated,omitempty"`
    Created *int64 `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Modified *int64 `json:"modified,omitempty"`
    PersistLast *bool `json:"persistLast,omitempty"`
    Persisted *bool `json:"persisted,omitempty"`
    PushEnabled *bool `json:"pushEnabled,omitempty"`
    TLSOnly *bool `json:"tlsOnly,omitempty"`
    
}

