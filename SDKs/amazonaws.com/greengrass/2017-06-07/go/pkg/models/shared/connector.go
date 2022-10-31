package shared



type Connector struct {
    ConnectorArn string `json:"ConnectorArn"`
    ID string `json:"Id"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    
}

