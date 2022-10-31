package shared



type CreateNamedQueryInput struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Database string `json:"Database"`
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    QueryString string `json:"QueryString"`
    WorkGroup *string `json:"WorkGroup,omitempty"`
    
}

