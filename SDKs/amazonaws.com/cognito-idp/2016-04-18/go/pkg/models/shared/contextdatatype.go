package shared

type ContextDataType struct {
	EncodedData *string      `json:"EncodedData"`
	HTTPHeaders []HTTPHeader `json:"HttpHeaders"`
	IPAddress   string       `json:"IpAddress"`
	ServerName  string       `json:"ServerName"`
	ServerPath  string       `json:"ServerPath"`
}
