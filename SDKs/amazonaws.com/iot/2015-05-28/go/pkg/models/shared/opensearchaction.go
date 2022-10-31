package shared



type OpenSearchAction struct {
    Endpoint string `json:"endpoint"`
    ID string `json:"id"`
    Index string `json:"index"`
    RoleArn string `json:"roleArn"`
    Type string `json:"type"`
    
}

