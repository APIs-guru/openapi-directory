package shared

// RedshiftDataParameters
// These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
type RedshiftDataParameters struct {
	Database         string  `json:"Database"`
	DbUser           *string `json:"DbUser,omitempty"`
	SecretManagerArn *string `json:"SecretManagerArn,omitempty"`
	SQL              string  `json:"Sql"`
	StatementName    *string `json:"StatementName,omitempty"`
	WithEvent        *bool   `json:"WithEvent,omitempty"`
}
