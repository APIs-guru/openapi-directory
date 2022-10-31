package shared

type TLSConfig struct {
	ServerNameToVerify *string `json:"ServerNameToVerify,omitempty"`
}
