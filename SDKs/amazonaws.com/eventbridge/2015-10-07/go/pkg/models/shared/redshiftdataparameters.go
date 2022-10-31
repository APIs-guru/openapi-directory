package shared



type RedshiftDataParameters struct {
    Database string `json:"Database"`
    DbUser *string `json:"DbUser,omitempty"`
    SecretManagerArn *string `json:"SecretManagerArn,omitempty"`
    SQL string `json:"Sql"`
    StatementName *string `json:"StatementName,omitempty"`
    WithEvent *bool `json:"WithEvent,omitempty"`
    
}

