package shared

type ContextDataType struct {
	EncodedData *string      `json:"EncodedData,omitempty"`
	HTTPHeaders []HTTPHeader `json:"HttpHeaders"`
	IPAddress   string       `json:"IpAddress"`
	ServerName  string       `json:"ServerName"`
	ServerPath  string       `json:"ServerPath"`
}
