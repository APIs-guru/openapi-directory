package shared

type RedshiftDataParameters struct {
	Database         string  `json:"Database"`
	DbUser           *string `json:"DbUser"`
	SecretManagerArn *string `json:"SecretManagerArn"`
	SQL              string  `json:"Sql"`
	StatementName    *string `json:"StatementName"`
	WithEvent        *bool   `json:"WithEvent"`
}
